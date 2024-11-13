const Navbar = () => {
    return ( 
        <div className="w-full flex items-center py-14 pl-24 text-black gap-52 font-semibold tracking-wide">
            <div className="w-6/12 flex justify-evenly gap-3 "> 
                <h1>About</h1>
                <h1>Team</h1>
                <h1>Sponsors</h1>
                <h1>Events</h1>
                <h1>Stories</h1>
                <h1>Sign Up!</h1>
            </div>
            <div className="w-3/12 flex justify-evenly gap-3">
                <h1>Insta</h1>
                <h1>Linkedln</h1>
                <h1>Discord</h1>
                <h1>Mail</h1>
            </div>
        </div>
     );
}
 
export default Navbar;