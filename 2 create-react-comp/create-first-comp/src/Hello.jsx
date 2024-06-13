function Hello () {

    let myName = 'Prakash';
    let msgNumber = 456;

    let fullName = () => {
        return 'Prashant Jain';
    }

    return <h3>
        Message No. {msgNumber} This is my mentor {fullName()}.
    </h3>
}

export default Hello;