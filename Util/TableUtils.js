function TableUtils() {
}

TableUtils.deleteRow = function(elem)
{
	if(elem && elem.tagName.toLowerCase() == 'tr')
	{
		var rowIndex = elem.rowIndex;
		
		if((rowIndex || rowIndex === 0) && rowIndex >= 0)
		{
			var table = ElementUtils.getParentByTag(elem, "table");
			
			table.deleteRow(rowIndex);
		}
	}
};

TableUtils.clearTBody = function(table)
{
	var removeRows = [];
	
	if(table && table.tagName.toLowerCase() == 'table' && table.rows)
	{
		var length = table.rows.length;
		for(var idx = 0; idx < length; idx++)
		{
			var hasTh = false;
			var row = table.rows[idx];
			
			if(row && row.cells)
			{
				var cellsLength = row.cells.length;
				
				for(var cellidx = 0; cellidx < cellsLength; cellidx++)
				{
					if(row.cells[cellidx])
					{
						var cell = row.cells[cellidx];
						
						if(cell.tagName.toLowerCase() == 'th')
						{
							hasTh = true;
							break;
						}
					}
				}
				
				if(!hasTh)
				{
					removeRows.push(idx);
				}
			}
		}
		
		if(table.tHead)
		{
			var tHead = table.tHead;
			
			if(tHead && tHead.rows)
			{
				var rowsLength = tHead.rows.length;
				
				for(var rowIdx = 0; rowIdx < rowsLength; rowIdx++)
				{
					var row = tHead.rows[rowIdx];
					
					if(row)
					{
						var index = removeRows.indexOf(row.rowIndex);
						if (index !== -1) {
						  removeRows.splice(index, 1);
						}
					}
				}
			}
		}
		
		if(table.tFoot)
		{
			var tFoot = table.tFoot;
			
			if(tFoot && tFoot.rows)
			{
				var rowsLength = tFoot.rows.length;
				
				for(var rowIdx = 0; rowIdx < rowsLength; rowIdx++)
				{
					var row = tFoot.rows[rowIdx];
					
					if(row)
					{
						var index = removeRows.indexOf(row.rowIndex);
						if (index !== -1) {
						  removeRows.splice(index, 1);
						}
					}
				}
			}
		}
		
		removeRows.reverse().forEach((idx) => {
			table.deleteRow(idx);
		});
		
		if(table.tBodies && table.tBodies.length > 0)
		{
			for(var bodyIdx = 0; bodyIdx < table.tBodies.length; bodyIdx++)
			{
				var tBody = table.tBodies[bodyIdx];
				
				if(tBody)
				{
					if(tBody.rows && tBody.rows.length > 0)
					{
						var rows = tBody.rows;
						
						for(var rowIdx = rows.length - 1; rowIdx >= 0; rowIdx--)
						{
							tBody.deleteRow(rowIdx);
						}
					}
				}
			}
		}
	}
};

TableUtils.insertEmptyRow = function(table, start)
{
	var row = null;
	
	if(table)
	{
		var rowLength = 0;
		var bodyStart = 0;
		var bodyEnd = 0;
		
		if(table.tHead)
		{
			var tHead = table.tHead;
			
			if(tHead && tHead.rows && tHead.rows.length > 0)
			{
				bodyStart = tHead.rows.length;
			}
		}
		if(table.tFoot)
		{
			var tFoot = table.tFoot;
			
			if(tFoot && tFoot.rows && tFoot.rows.length > 0)
			{
				if(tFoot.rows[0])
				{
					bodyEnd = tFoot.rows[0].rowIndex;
				}
			}
		}
		if(!bodyStart)
		{
			var length = table.rows.length;
			for(var idx = 0; idx < length; idx++)
			{
				var hasTh = false;
				var currow = table.rows[idx];
				
				if(currow && currow.cells)
				{
					var cellsLength = currow.cells.length;
					
					for(var cellidx = 0; cellidx < cellsLength; cellidx++)
					{
						if(currow.cells[cellidx])
						{
							var cell = currow.cells[cellidx];
							
							if(cell.tagName.toLowerCase() == 'th')
							{
								hasTh = true;
								break;
							}
						}
					}
					
					if(hasTh)
					{
						bodyStart = idx + 1;
					}
				}
			}
		}
		if(!bodyEnd)
		{
			bodyEnd = table.rows.length;
		}
		if(table.rows)
		{
			var length = table.rows.length;
			for(var idx = 0; idx < length; idx++)
			{
				var currow = table.rows[idx];
				
				if(currow && currow.cells)
				{
					var cellsLength = currow.cells.length;
					
					rowLength = (rowLength < cellsLength) ? cellsLength : rowLength;
				}
			}
		}
		if(!rowLength)
		{
			rowLength = 1;
		}
		if(table.tBodies && table.tBodies.length > 0)
		{
			var numTBodies = table.tBodies.length;
			var firstTBodyIdx = -1;
			var lastTBodyIdx = -1;
			var firstIdx = -1;
			var lastIdx = -1;
			
			for(var idx = 0; idx < numTBodies; idx++)
			{
				var tBody = table.tBodies[idx];
				
				if(tBody && tBody.rows)
				{
					var numRows = tBody.rows.length;
					
					for(var rowIdx = 0; rowIdx < numRows; rowIdx++)
					{
						var currow = tBody.rows[rowIdx];
						
						if(currow)
						{
							if(firstTBodyIdx < 0 || firstIdx < 0 || firstIdx < currow.rowIndex)
							{
								firstTBodyIdx = idx;
								firstIdx = currow.rowIndex;
							}
							if(lastTBodyIdx < 0 || lastIdx < 0 || lastIdx > currow.rowIndex)
							{
								lastTBodyIdx = idx;
								lastIdx = currow.rowIndex;
							}
						}
					}
				}
			}
			
			if(numTBodies > 0 && firstTBodyIdx < 0)
			{
				firstTBodyIdx = 0;
			}
			if(numTBodies > 0 && lastTBodyIdx < 0)
			{
				lastTBodyIdx = numTBodies - 1;
			}
			
			if(firstTBodyIdx >= 0 && start)
			{
				row = table.tBodies[firstTBodyIdx].insertRow(0);
			} else if(lastTBodyIdx >= 0 && !start) {
				row = table.tBodies[lastTBodyIdx].insertRow(table.tBodies[lastTBodyIdx].rows.length);
			}
		}
		if(!row)
		{
			if(start)
			{
				row = table.insertRow(bodyStart);
			}
			else
			{
				row = table.insertRow(bodyEnd);
			}
		}
		if(row)
		{
			for(var cellidx = 0; cellidx < rowLength; cellidx++)
			{
				var cell = row.insertCell(0);
				cell.innerHTML = "&nbsp;";
			}
		}
	}
	
	return row;
};

(function () {
  // Static initialization code
})();