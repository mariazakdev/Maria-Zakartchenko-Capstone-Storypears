import './LoginPage.scss';
import LogIn from '../../components/LogIn/LogIn';


function LoginPage(){
    return(
        <div className='site'>
        <section className='site__content'>
        <h1>Welcome to Story Pears</h1>
        <LogIn />
        </section>
    
     
        </div>
    );
};
export default LoginPage;