export const addTweets = (data) => {
    return {
        type : 'ADD_TWEETS',
        data,
    }
}

export const dltTweet = (data) => {
    return {
        type : 'DLT_TWEET',
        data,
    }
}