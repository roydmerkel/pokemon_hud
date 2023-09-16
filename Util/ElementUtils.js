function ElementUtils() {
}

ElementUtils.getChildById = function(elem, id)
{
	if(elem)
	{
		if(elem.id == id)
		{
			return elem;
		}
		else if(elem.children)
		{
			for (const child of elem.children) {
				var iterRet = ElementUtils.getChildById(child, id);
				
				if(iterRet)
				{
					return iterRet;
				}
			}
		}
	}
	
	return null;
};

ElementUtils.getChildrenById = function(elem, id)
{
	if(elem)
	{
		var ret = [];
		if(elem.id == id)
		{
			ret.push(elem);
		}
		else if(elem.children)
		{
			
			for (const child of elem.children) {
				var iterRet = ElementUtils.getChildrenById(child, id);
				
				if(iterRet)
				{
					ret = ret.concat(iterRet);
				}
			}
		}
		return ret;
	}
	
	return [];
};
	
ElementUtils.getChildByTag = function(elem, tag)
{
	if(elem)
	{
		if(elem.tagName.toLowerCase() == tag.toLowerCase())
		{
			return elem;
		}
		else if(elem.children)
		{
			for (const child of elem.children) {
				var iterRet = ElementUtils.getChildByTag(child, tag);
				
				if(iterRet)
				{
					return iterRet;
				}
			}
		}
	}
	
	return null;
};
	
ElementUtils.getChildrenByTag = function(elem, tag)
{
	if(elem)
	{
		var ret = [];
		if(elem.tagName.toLowerCase() == tag.toLowerCase())
		{
			ret.push(elem);
		}
		else if(elem.children)
		{
			
			for (const child of elem.children) {
				var iterRet = ElementUtils.getChildrenByTag(child, tag);
				
				if(iterRet)
				{
					ret = ret.concat(iterRet);
				}
			}
		}
		return ret;
	}
	
	return [];
};

ElementUtils.getParentByTag = function(elem, tag)
{
	if(elem)
	{
		if(elem.tagName.toLowerCase() == tag.toLowerCase())
		{
			return elem;
		}
		else if(elem.parentElement)
		{
			var iterRet = ElementUtils.getParentByTag(elem.parentElement, tag);
			
			if(iterRet)
			{
				return iterRet;
			}
		}
	}
	
	return null;
};
	
(function () {
  // Static initialization code
})();