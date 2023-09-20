const Header = () => {
    return (
        <div className="flex  justify-between shadow-lg py-2">
            <h1 className="text-2xl font-medium mt-4 ml-6">Fokira Bazar</h1>
            <nav className="py-4 mr-5 space-x-10 px-3 text-xl">
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/dashboard">Dashboard</a>
            </nav>
        </div>
    );
};

export default Header;