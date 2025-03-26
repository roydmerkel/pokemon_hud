import { useEffect, useState, useRef, FunctionComponent } from 'react';

import TrainersLookup from './Model/GoldSilver/TrainersLookup';
import { ITrainer, ITrainerTeam } from './Model/Interfaces/ITrainer';
import { JSX } from 'react/jsx-runtime';

const TestGoldTrainersApp: FunctionComponent = () => {
    var trainersLookup: TrainersLookup = new TrainersLookup();
    function GetTrainers(): JSX.Element[] {
        var trainers: JSX.Element[] = [];

        trainersLookup.trainersLookup.forEach((value: ITrainer, key: string | number, map: Map<string | number, ITrainer>) => {
            var hasTeam: boolean = false;
            value.teams.forEach((v: ITrainerTeam, k: string | number, m: Map<string | number, ITrainerTeam>) => {
                var name: string = "";
                var image: string = "";
                var reference: string = "";

                if (v && v.fullname) {
                    name = v.fullname;
                }
                else {
                    if (value.name) {
                        name = value.name;
                    }
                    else {
                        name = "";
                    }
                    if (v.name) {
                        if (name !== "") {
                            name = name + " ";
                        }
                        name = name + v.name;
                    }
                }
                if (v && v.image) {
                    image = v.image;
                }
                else if (value && value.image) {
                    image = value.image;
                }
                else {
                    image = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D"
                }
                if (v && v.reference) {
                    reference = v.reference;
                }
                else if (value && value.reference) {
                    reference = value.reference;
                }
                hasTeam = true;
                trainers.push(<tr style={{ width: '100%', height: '100%' }}>
                    <td>{key.toString()}</td>
                    <td>{k.toString()}</td>
                    <td>{name}</td>
                    <td>{value.class}</td>
                    <td>{reference}</td>
                    <td><img src={image} /></td>
                </tr>);
            });
            if (!hasTeam) {
                trainers.push(<tr style={{ width: '100%', height: '100%' }}>
                    <td>{key.toString()}</td>
                    <td>N/A</td>
                    <td>{((value.name) ? value.name : "")}</td>
                    <td>{value.class}</td>
                    <td>{((value && value.reference) ? value.reference : "")}</td>
                    <td><img src={((value && value.image) ? value.image : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D")} /></td>
                </tr>);
            }
        });

        return trainers;
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
                    <th>trainer class id</th>
                    <td>team id</td>
                    <td>name</td>
                    <td>trainer class</td>
                    <td>image reference</td>
                    <td>image</td>
                </tr>
            </thead>
            <tbody>
                {GetTrainers()}
            </tbody>
        </table>
    );
};

export default TestGoldTrainersApp;
