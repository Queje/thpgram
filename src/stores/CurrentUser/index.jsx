const CurrentUser = ({id, email, islogged}) => {
    return {
        type: 'CurrentUser',
        id: id,
        email: email,
        islogged: islogged,
    }
}

export default CurrentUser;