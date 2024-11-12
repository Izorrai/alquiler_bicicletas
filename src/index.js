
app.set(`views`,'src/views');
app.set(`view engine`,'pug');

app.use(express.static('public'))

app.get('/',(req, res) => {res.render('index', {tittle: 'Inicio', message: 'Mensaje a mostrar'})});


app.listen(3000, () => console.log("Estamos conectados a la 3000"));