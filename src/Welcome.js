const Welcome = () => {
    // mendeklarasikan variabel
    /*
    tipe data yang didukung oleh React:
        - integer
        - double
        - string
        - array
        - math
    tipe data yang tidak didukung oleh React:
        - object 
    */
    // nilai dinamis juga bisa digunakan dalam atribut komponen

    // nilai dinamis diakses menggunakan interpolation { } 

    const title = "Welcome to the new Blog";
    const likes = 105;
    const person = { name: 'rizal', email: 'rizal@inixindo.co.id' };
    const link = "http://inixindo.id";

    return ( 
        <div className="App">
            <div className="content">
                <h3>{ title }</h3>
                <p>Liked { likes } times.</p>
                {/* <p>{ person }</p> */}
                <p>{ 10 }</p>
                <p>{ 25.7325 }</p>
                <p>{ "Hello, Inixindo!" }</p>
                <p>{ [1, 2, 3, 4, 5, 6, 7, 8, 9] }</p>
                <p>{ Math.random() * 10 }</p>
                <a href={ link }>Inixindo Site</a>
            </div>
        </div>
    );
}
 
export default Welcome;