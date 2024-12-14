import * as baseStyles from '../../../Base.module';
import * as typeStyles from '../../../Types.module';

import { FunctionComponent } from 'react';

const ResetsBattlesPlaytime: FunctionComponent = ({ gamehookLoaded, isConnected, pokemonModelSet, properties, playTime, gen, new_colors, modelClasses, in_battle }) => {
  var hours = (properties?.["game_time.hours"]?.value) ? properties?.["game_time.hours"]?.value : 0;
  if(hours < 10) {
    hours = "00" + hours.toString();
  } else if(hours < 100) {
    hours = "0" + hours.toString();
  } else {
    hours = hours.toString();
  }
  var minutes = (properties?.["game_time.minutes"]?.value) ? properties?.["game_time.minutes"]?.value : 0;
  if(minutes < 10) {
    minutes = "0" + minutes.toString();
  } else {
    minutes = minutes.toString();
  }
  var seconds = (properties?.["game_time.seconds"]?.value) ? properties?.["game_time.seconds"]?.value : 0;
  if(seconds < 10) {
    seconds = "0" + seconds.toString();
  } else {
    seconds = seconds.toString();
  }
  var frames = (properties?.["game_time.frames"]?.value) ? properties?.["game_time.frames"]?.value : 0;
  frames = Math.trunc(frames * 1000 / 60)
  if(frames < 10) {
    frames = "00" + frames.toString();
  } else if(frames < 100) {
    frames = "0" + frames.toString();
  } else {
    frames = frames.toString();
  }
  var playTimeVal = playTime ? playTime : 0;
  var playTimeMS = (playTimeVal % 1000).toFixed(0);
  var playTimeSec = ((playTimeVal / 1000) % 60).toFixed(0);
  var playTimeMin = ((playTimeVal / (1000 * 60)) % 60).toFixed(0);
  var playTimeHours = (playTimeVal / (1000 * 60 * 60)).toFixed(0);
  if(playTimeHours < 10) {
    playTimeHours = "00" + playTimeHours.toString();
  } else if(playTimeHours < 100) {
    playTimeHours = "0" + playTimeHours.toString();
  } else {
    playTimeHours = playTimeHours.toString();
  }
  if(playTimeMin < 10) {
    playTimeMin = "0" + playTimeMin.toString();
  } else {
    playTimeMin = playTimeMin.toString();
  }
  if(playTimeSec < 10) {
    playTimeSec = "0" + playTimeSec.toString();
  } else {
    playTimeSec = playTimeSec.toString();
  }
  if(playTimeMS < 10) {
    playTimeMS = "00" + playTimeMS.toString();
  } else if(playTimeMS < 100) {
    playTimeMS = "0" + playTimeMS.toString();
  } else {
    playTimeMS = playTimeMS.toString();
  }
  return (
    <table width="100%" height="100%">
      <tbody>
        <tr>
          <td width="10%" height="100%">
          </td>
          <td width="80%" height="100%" className={`${baseStyles.container}`}>
            <table width="100%" height="100%">
              <tbody>
                <tr>
                  <td width="10%">
                    <p>BATTLES:</p>
                  </td>
                  <td  width="10%">
                    <p id="battle_count">-1</p>
                  </td>
                  <td width="10%">
                    <p>RESETS:</p>
                  </td>
                  <td width="15%">
                    <p id="reset_count">-1</p>
                  </td>
                  <td width="10%">
                    &nbsp;
                  </td>
                  <td width="45%">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <p id="play_time">TIME:    {playTimeHours}:{playTimeMin}:{playTimeSec}.{playTimeMS}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p id="game_time">GAME TIME:    {hours}:{minutes}:{seconds}.{frames}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td width="10%" height="100%">
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ResetsBattlesPlaytime;
