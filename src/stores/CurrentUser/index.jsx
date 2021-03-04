const CurrentUser = ({id, email}) => {
    return {
        type: 'CurrentUser',
        id: id,
        email: email,
    }
}

export default CurrentUser;