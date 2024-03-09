import "./SectionIdentify.css"; 
import Post from "../Post/Post";
import Header from "../Header/Header";

const SectionIdentify = () =>{

    return(
    <div className="main-container">

        <section className="perfil">
            <div className="image-container"><img src="#" alt="image"/></div>
            <div className="title-container"><h1>Instituição</h1></div>
        </section>
    
        <section className="main-space">
        <header className="h-menu"><Header/></header>
        <div className="posts"><Post/></div>
        </section>
    </div>
    );
}

export default SectionIdentify;