
public class Book extends Item {
	private String author;
	private String description;
	private String category;
	private String releaseDate;
	
	public Book(String bookId, String name, int unitPridce) {
		super(bookId, name, unitPridce);
	}
	
	

	public Book(String bookId, String name, int unitPrice, String author, String description, String category,
			String releaseDate) {
		super(bookId, name, unitPrice);
		this.author = author;
		this.description = description;
		this.category = category;
		this.releaseDate = releaseDate;
	}

	public String getAuthor() {return author;}

	public void setAuthor(String author) {this.author = author;}

	public String getDescription() {return description;}

	public void setDescription(String description) {this.description = description;}

	public String getCategory() {return category;}

	public void setCategory(String category) {this.category = category;}

	public String getReleaseDate() {return releaseDate;}

	public void setReleaseDate(String releaseDate) {this.releaseDate = releaseDate;}



	@Override
	String getBookId() {return bookId;}
	@Override
	void setBookId(String bookId) {this.bookId = bookId;}
	@Override
	String getName() {return name;}
	@Override
	void setName(String name) {this.name = name;}
	@Override
	int getUnitPrice() {return unitPrice;}
	@Override
	void setUnitPrice(int unitPrice) {this.unitPrice = unitPrice;}
	
}
