import './LoginPage.scss';
import LogIn from '../../components/LogIn/LogIn';


function LoginPage({handleLogin}){
    return(
        <div className='site'>
        <section className='site__content'>
        <LogIn handleLogin={handleLogin} />
        </section>
    
     
        </div>
    );
};
export default LoginPage;