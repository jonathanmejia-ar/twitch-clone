import Axios from 'axios';

/**
 * Please use your client_id and secret
 */
const client_id = 'r499v1l1y5cplu5fh2w08zqfg8kxc8';
const secret = '0ixbuzbhr00ltlne2rkkbphlwygeom';
const user_id = '125609133';

//Twitch required headers.
const twitchAuthHeaders = (token) => ({
    headers: {
        Authorization: `Bearer ${token}`,
        'Client-Id': client_id
    }
});

//Add collected viewers to all games.
export const getGameViewers = async (topGames, token) => {
    return Promise.all(topGames.map(async game => {
        game['viewers'] = await getStreams(game.id, token);
        return game;
    }));
};

export const getTopGames = (token, limit = 20) => {
    return Axios.get(`https://api.twitch.tv/helix/games/top?first=${limit}`, twitchAuthHeaders(token))
        .then(response => {
            return response.data;
        });
};

export const getMoreTopGames = (token, page, limit = 20) => {
    return Axios.get(`https://api.twitch.tv/helix/games/top?first=${limit}&after=${page}`, twitchAuthHeaders(token))
        .then(response => {
            return response.data;
        });
};

export const getTwitchAppToken = () => {
    return Axios.post(`https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${secret}&grant_type=client_credentials`)
        .then(response => {
            return response.data.access_token
        });
};

export const getTwitchUserToken = () => {
    return Axios.get(`https://id.twitch.tv/oauth2/authorize?client_id=${client_id}&redirect_uri=http://localhost:3000&response_type=code&scope=user:read:follows`)
        .then(response => {
            return response;
        })
};

//Get the 50 best streams of a specific game and collect all viewers.
export const getStreams = (gameId, token) => {
    return Axios.get(`https://api.twitch.tv/helix/streams?first=50&game_id=${gameId}`, twitchAuthHeaders(token))
        .then(response => {
            let totalViews = 0;
            response.data.data.forEach(stream => {
                totalViews += stream.viewer_count;
            })
            return totalViews;
        });
};

export const getFollowedStreams = (token) => {
    return Axios.get(`https://api.twitch.tv/helix/streams/followed?user_id=${user_id}`, twitchAuthHeaders(token))
        .then(response => {
            return response.data;
        })
};