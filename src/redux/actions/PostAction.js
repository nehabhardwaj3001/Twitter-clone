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

export const showModal = () => {
    return {
        type : "SHOW_MODAL",
    }
}

export const closeModal = () => {
    return {
        type : "CLOSE_MODAL",
    }
}

export const openComments = () => {
    return {
        type: "OPEN_COMMENTS"
    }
}