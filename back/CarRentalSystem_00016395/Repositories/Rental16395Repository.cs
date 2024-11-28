// ### Student: 00016395

using CarRentalSystem_00016395.Data;
using CarRentalSystem_00016395.Models;
using Microsoft.EntityFrameworkCore;

namespace CarRentalSystem_00016395.Repositories;

public class Rental16395Repository : IRental16395Repository
{
    private readonly CRDbContext_16395 _context;
    
    public Rental16395Repository(CRDbContext_16395 context)
    {
        _context = context;
    }
    
    public async Task<IEnumerable<Rental_16395>> GetAllRentalsAsync()
    {
        return await _context.Rentals
            .Include(r => r.Car)
            .ToListAsync();
    }
    
    public async Task<Rental_16395> GetRentalByIdAsync(int id)
    {
        return await _context.Rentals
            .Include(r => r.Car)
            .FirstOrDefaultAsync(r => r.Id == id);
    }
    
    public async Task AddRentalAsync(Rental_16395 rental, Customer_16395 customer)
    {
        if (customer != null)
        {
            _context.Customers.Add(customer);
            rental.Customer = customer; 
        }

        _context.Rentals.Add(rental);
        await _context.SaveChangesAsync();
    }

    
    public async Task UpdateRentalAsync(Rental_16395 rental)
    {
        _context.Entry(rental).State = EntityState.Modified;
        await _context.SaveChangesAsync();
    }
    
    public async Task DeleteRentalAsync(int id)
    {
        var rental = await _context.Rentals.FindAsync(id);
        
        if (rental == null)
        {
            return;
        }
        
        _context.Rentals.Remove(rental);
        await _context.SaveChangesAsync();
    }
}