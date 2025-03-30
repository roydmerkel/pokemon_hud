import { useEffect, useState, useRef, FunctionComponent } from 'react';

import TypeLookup from '../Model/GoldSilver/TypeLookup';
import { JSX } from 'react/jsx-runtime';
import IType from '../Model/Interfaces/IType';

const TestGoldTrainersApp: FunctionComponent = () => {
    var typeLookup: TypeLookup = new TypeLookup();
    function GetTypes(): JSX.Element[] {
        var types: JSX.Element[] = [];

        typeLookup.typeLookup.forEach((value: IType, key: string | number, map: Map<string | number, IType>) => {
            types.push(<tr style={{ width: '100%', height: '100%' }}>
                <td>{value.name}</td>
                <td className={`${value.old_css_class}`}><span>{value.name}</span></td>
                <td className={`${value.new_css_class}`}><span>{value.name}</span></td>
            </tr>);
        });

        return types;
    }

    return (
        //<div>
        //  <div className={styles.title}>CSS module works!</div>
        //  <div className={styles.subtitle}>CSS module + Tailwind works!</div>
        //  <div
        //    className={
        //      'border-[10px] border-solid border-red-800 rounded-full w-[200px] h-[200px] flex items-center justify-center text-center'
        //    }
        //  >
        //    Tailwind works!
        //  </div>
        //  <SamplePage />
        //</div>
        <table style={{ width: '100%', height: '100%' }}>
            <thead>
                <tr style={{ width: '100%', height: '100%' }}>
                    <th>type</th>
                    <td>old</td>
                    <td>new</td>
                </tr>
            </thead>
            <tbody>
                {GetTypes()}
            </tbody>
        </table>
    );
};

export default TestGoldTrainersApp;
