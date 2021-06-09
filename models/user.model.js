

class User {

    constructor({ name, s_name, lastName_p, lastName_m, email, first, password, user_avatar, number, street, city,state}) {

        this.name = name;
        this.s_name = s_name;
        this.lastName_p = lastName_p;
        this.lastName_m = lastName_m;
        this.first = first;
        this.password = password;
        this.email = email;
        this.avatar = user_avatar
        this.number = number;
        this.street = street;
        this.city = city;
        this.state = state;        

        //this.newUser();

    }

    setPurchases(purchase){

        this.purchase = purchase;

    }

    setName({email, avatar, name, midelname, f_lastName, lastName}){
        this.email = email;
        this.name = name;
        this.s_name = midelname;
        this.lastName_p = f_lastName;
        this.lastName_m = lastName;
        this.avatar = avatar;
    }

    newUser() {
    	/*console.log(`
    			Hola soy 
    			${this.nombre} 
    			${this.s_nombre} 
    			${this.apellido_p} 
    			${this.apellido_m} 
    			${this.contrasenia} 
    			${this.email}`
    		);*/    	
        /*try {
            conn.query(`insert into user(
            email,
            user_name,
            s_name,
            m_lastName,
            p_lastName,
            user_password
        ) values(?,?,?,?,?,?)`, [this.email, this.name, this.s_name, this.lastName_p, this.lastName_m, this.password], (err, rows, fields) => {

                if (err) {
                    console.log(err);
                    return;
                }

                rows.affectedRows > 0 ? res.redirect('/login/' + body.email) : res.send('Not Found');
                //res.render('user', user);
            });
        } catch (error) {
            console.log(error);
            return;
        }*/
    } 
}

module.exports = User;