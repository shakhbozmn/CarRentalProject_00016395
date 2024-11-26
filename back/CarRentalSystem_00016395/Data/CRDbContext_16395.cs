// ### Student: 00016395


using CarRentalSystem_00016395.Models;
using Microsoft.EntityFrameworkCore;

namespace CarRentalSystem_00016395.Data;

public class CRDbContext_16395 : DbContext
{
    public CRDbContext_16395(DbContextOptions<CRDbContext_16395> o) : base(o)
    {}
    
    public DbSet<Car_16395> Cars { get; set; }
    
    public DbSet<Customer_16395> Customers { get; set; }
    
    public DbSet<Rental_16395> Rentals { get; set; }
}