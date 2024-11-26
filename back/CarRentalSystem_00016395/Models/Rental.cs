/// ### Student: 00016395


namespace CarRentalSystem_00016395.Models;

public class Rental
{
    public int Id { get; set; } 
    public int CarId { get; set; } 
    public Car? Car { get; set; }
    public int CustomerId { get; set; } 
    public Customer? Customer { get; set; }
    public DateTime RentalDate { get; set; }
    public DateTime ReturnDate { get; set; }
}