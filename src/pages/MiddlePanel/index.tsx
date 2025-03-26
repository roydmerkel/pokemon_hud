import * as styles from './MiddlePanel.module';
import * as baseStyles from '../../Base.module';
import * as typeStyles from '../../Types.module';

import ResetsBattlesPlaytime from './Components/ResetsBattlesPlaytime';

import { FunctionComponent } from 'react';

const MiddlePanel: FunctionComponent = () => {
    return (
        <table style={{ width: "100%", height: "100%" }}>
            <tbody>
                <tr style={{ width: "100%", height: "90%" }}>
                    <td>
                        &nbsp;
                    </td>
                </tr>
                <tr style={{ width: "100%", height: "10%" }} id="resets_panel">
                    <td>
                        <ResetsBattlesPlaytime />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default MiddlePanel;
