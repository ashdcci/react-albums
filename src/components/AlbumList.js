import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {

    state = { albums: [] };

    componentWillMount() {
        // console.log('Component will mount in album')
        axios
        .get('http://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }))
        .catch(err => console.log(err));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }
    

    render() {
        console.log(this.state);

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

