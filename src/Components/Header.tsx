import headerModule from  "./header.module.css";
export const Header = () : JSX.Element =>  {
    return( 
        <header className={headerModule.site_header}>
            <div className="container"> 
                <h1>Todo App</h1>
            </div>
        </header>
    )
}