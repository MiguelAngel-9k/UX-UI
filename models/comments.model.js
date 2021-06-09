

class Comment{

	constructor({user_email, product, content, comment_date, name, avatar}){
		this.user_email = user_email;
		this.product = product;
		this.content = content;
		this.comment_date = comment_date;
		this.name = name;
		this.avatar = avatar;
	}

}

module.exports = Comment;