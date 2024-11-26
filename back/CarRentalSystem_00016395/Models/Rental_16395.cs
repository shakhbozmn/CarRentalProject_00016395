// ### Student: 00016395

namespace CarRentalSystem_00016395.Models;

public class Rental_16395
{
    public int Id { get; set; } 
    public int CarId { get; set; } 
    public Car_16395? Car { get; set; }
    public int CustomerId { get; set; } 
    public Customer_16395? Customer { get; set; }
    public DateTime RentalDate { get; set; }
    public DateTime ReturnDate { get; set; }
}