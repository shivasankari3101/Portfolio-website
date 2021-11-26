import Footer from "../components/Footer/Footer";
function Layout(props){
    return(
        <div>
            <main>
                {props.children}
            </main>
            <Footer></Footer>
            
        </div>
    )
}

export default Layout;