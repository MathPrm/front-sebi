import '../../assets/styles/form-sign-up.css';

function FormsignUp() {
    const title = 'Inscription'
    return (
        <div className='form-sign-up'>
            <h1>{title}</h1>
            <form action="http://localhost:8080/coucou" method="post">
                <label for="username">Username</label>
                <input type="text" name="username" id="username"></input>
                <label for="password">Password</label>
                <input type="password" name="password" id="password"></input>
                <input type="submit" value="Sign Up"></input>
            </form>
        </div>
    )
}

export default FormsignUp;