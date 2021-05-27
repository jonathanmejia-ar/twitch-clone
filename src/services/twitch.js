import Axios from 'axios';

const client_id = 'r499v1l1y5cplu5fh2w08zqfg8kxc8';
const secret = '0ixbuzbhr00ltlne2rkkbphlwygeom';

export const getGameViewers = async (topGames, token) => {
    return Promise.all(topGames.map(async game => {
        game['viewers'] = await getStreams(game.id, token);
        return game;
    }));
};

export const getTopGames = (token) => {
    return Axios.get(`https://api.twitch.tv/helix/games/top`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Client-Id': client_id
        }
    }).then(response => {
        return response.data.data;
    });
};

export const getTwitchToken = () => {
    return Axios.post(`https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${secret}&grant_type=client_credentials`)
        .then(response => {
            return response.data.access_token
        });
};

export const getStreams = (gameId, token) => {
    return Axios.get(`https://api.twitch.tv/helix/streams?first=100&game_id=${gameId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Client-Id': client_id
        }
    }).then(response => {
        let totalViews = 0;
        response.data.data.forEach(stream => {
            totalViews += stream.viewer_count;
        })
        return totalViews;
    });
};