import React, { Component, PropTypes } from 'react';
import { ListView } from 'react-native';

import ChatItem from '../../components/ChatItem';

export default class ChatContainer extends Component{
    constructor(props){
        super(props);
        const { dataSource } = this.props;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(dataSource)
        }
    }

    static propTypes = {
        dataSource: PropTypes.array.isRequired,
        onPress: PropTypes.func
    }

    render(){
        const { onPress } = this.props
        return(
            <ListView 
                dataSource = {this.state.dataSource}
                renderRow = {(rowData) => 
                    <ChatItem index = {rowData} onPress = {onPress}/>
                }
            />
        )
    }
}