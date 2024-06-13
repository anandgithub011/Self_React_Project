function Random () {
    
    let randomNum = Math.random() * 100;

    return <h3 style={{'backgroundColor': 'red'}}>
        This is your random Number: {Math.floor(randomNum)}
    </h3>

}

export default Random;