// Copyright [2021] [Allow2 Pty Ltd]
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';

var React = require('react');
var createReactClass = require('create-react-class');

// import Avatar from 'material-ui/Avatar';
// import FlatButton from 'material-ui/FlatButton';
// import { sortedVisibleConfigurationsByPluginSelector } from '../selectors';
// import { allow2Request, allow2AvatarURL } from '../util';
// // import Dialogs from 'dialogs';
// import Checkbox from './Checkbox';
// // import path from 'path';
// import { remote, ipcRenderer as ipc } from 'electron';
// import {
//     Table,
//     TableBody,
//     TableHeader,
//     TableHeaderColumn,
//     TableRow,
//     TableRowColumn,
// } from 'material-ui/Table';
// import {Tabs, Tab} from 'material-ui/Tabs';

//var dialogs = Dialogs({});

exports = module.exports = createReactClass({

    // handleChange = (event) => {
    //     this.setState({
    //         pluginName: event.target.value
    //     });
    // };

    getInitialState: function() {
        return {
            device: null
        };
    },

    // messageDevices = {};

    // toggleCheckbox = (device, isChecked) => {
    //     this.props.onDeviceActive( device.device.UDN, true );
    //     ipc.send('setBinaryState', {
    //         UDN: device.device.UDN,
    //         state: isChecked ? 1 : 0
    //     });
    // };

    // componentDidMount = () => {
    //     ipc.on('setBinaryStateResponse', function (event, UDN, err, response) {
    //         let device = this.props.devices[UDN];
    //         this.props.onDeviceActive(UDN, false);
    //         if (err || ( response.BinaryState == undefined )) {
    //             return;
    //         }
    //         device.active = false;
    //         device.state = ( response.BinaryState != '0' );
    //         this.props.onDeviceUpdate({[UDN]: device});
    //     }.bind(this));
    // };


    render: function() {
        //let plugins = sortedVisibleConfigurationsByPluginSelector(this.props);
        return (
            React.createElement(div, {}, 'sshhhhh!')

        //     { devices.supported.length < 1 &&
        //     <div style={{ textAlign: "center" }}>
        //         <h1>No Devices Found</h1>
        //         <p style={{ width:"75%", margin: "auto" }}>Allow2Automate will auto-discover Wemo devices on your network and list them here when found.</p>
        //     </div>
        //     }
        //     { devices.supported.length > 0 &&
        //     <Table>
        //     <TableBody
        //         displayRowCheckbox={false}
        //         showRowHover={true}
        //         stripedRows={true}>
        //             { devices.supported.map(function (device) {
        //                 let token = deviceTokens[device.device.device.modelName];
        //                 let imageName = deviceImages[device.device.device.modelName];
        //                 let paired = this.props.pairings[device.device.UDN];
        //                 let child = paired && paired.ChildId && this.props.children[paired.ChildId];
        //                 let detail = child ? (
        //                     <b>{child.name}</b>
        //             ) : <b>Paired</b>;
        //                 let url = child && allow2AvatarURL(null, child);
        //                 return (
        //                     <TableRow
        //                 key={device.device.UDN}
        //                 selectable={false}>
        //                     <TableRowColumn>
        //                     { imageName &&
        //                     <img width="40" height="40"
        //                 src={ 'assets/img/' + imageName + '.png' }/>
        //             }
        //             </TableRowColumn>
        //                 <TableRowColumn>
        //                 { token &&
        //                 <span>{ device.device.device.friendlyName }</span>
        //             }
        //                 { !token &&
        //                 <span><i
        //                     style={{ color: '#555555' }}>{ device.device.device.friendlyName }</i></span>
        //                 }
        //             </TableRowColumn>
        //                 <TableRowColumn style={{textAlign: 'center'}}>
        //             <Checkbox
        //                 label=''
        //                 isChecked={device.state}
        //                 isDisabled={!token || device.active ? true : false}
        //                 handleCheckboxChange={this.toggleCheckbox.bind(this, device)}
        //                 />
        //                 </TableRowColumn>
        //                 <TableRowColumn style={{textAlign: 'right'}}>
        //                 { child &&
        //                 <Avatar src={url}/>
        //                 }
        //             </TableRowColumn>
        //                 <TableRowColumn style={{textAlign: 'left'}}>
        //                 { paired && detail }
        //                 { !paired &&
        //                 <FlatButton label="Assign"
        //                     onClick={this.assign.bind(this, device.device, token)}/>
        //                 }
        //             </TableRowColumn>
        //                 </TableRow>
        //             );
        //             }.bind(this)
        //         )}
        // </TableBody>
        // </Table>
        // }
        // { devices.notSupported.length > 0 &&
        //
        //     <div>
        //     <h2>Unsupported Devices</h2>
        //     If you would like any of these devices supported, please contact us at support@allow2.com.
        // <div>
        // <Table>
        // <TableBody
        //     displayRowCheckbox={false}
        //     showRowHover={false}
        //     stripedRows={true}>
        //         { devices.notSupported.map( (device) => {
        //             let imageName = deviceImages[device.device.device.modelName];
        //             return (
        //                 <TableRow key={ device.device.UDN }
        //             selectable={false}>
        //                 <TableRowColumn>
        //                 { imageName &&
        //                 <img width="40" height="40" src={ 'assets/img/' + imageName + '.png' } />
        //         }
        //         </TableRowColumn>
        //             <TableRowColumn>
        //             { device.device.device.friendlyName }
        //         </TableRowColumn>
        //             <TableRowColumn>
        //             { device.device.device.modelName }
        //         </TableRowColumn>
        //             <TableRowColumn>
        //             { device.device.device.modelNumber }
        //         </TableRowColumn>
        //             </TableRow>
        //         );
        //         })
        // }
        // </TableBody>
        // </Table>
        // </div>
        // </div>
        );
    }
});






