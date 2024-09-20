
public abstract class Item {
	
	String bookId;
	String name;
	int unitPrice;
	
	public Item(String bookId, String name, int unitPrice) {
		this.bookId = bookId;
		this.name = name;
		this.unitPrice = unitPrice;
	}

	abstract String getBookId();

	abstract void setBookId(String bookId);

	abstract String getName();

	abstract void setName(String name);

	abstract int getUnitPrice();

	abstract void setUnitPrice(int unitPrice);
	
}
