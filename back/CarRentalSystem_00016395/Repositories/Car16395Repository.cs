// ### Student: 00016395

using CarRentalSystem_00016395.Data;
using CarRentalSystem_00016395.Models;
using Microsoft.EntityFrameworkCore;

namespace CarRentalSystem_00016395.Repositories;

public class Car16395Repository : ICar16395Repository
{
    private readonly CRDbContext_16395 _context;
    
    public Car16395Repository(CRDbContext_16395 context)
    {
        _context = context;
    }
    
    public async Task<IEnumerable<Car_16395>> GetAllCarsAsync()
    {
        return await _context.Cars.ToListAsync();
    }
    
    public async Task<Car_16395> GetCarByIdAsync(int id)
    {
        return await _context.Cars.FindAsync(id);
    }
    
    public async Task AddCarAsync(Car_16395 car)
    {
        _context.Cars.Add(car);
        await _context.SaveChangesAsync();
    }
    
    public async Task UpdateCarAsync(Car_16395 car)
    {
        _context.Entry(car).State = EntityState.Modified;
        await _context.SaveChangesAsync();
    }
    
    public async Task DeleteCarAsync(int id)
    {
        var car = await _context.Cars.FindAsync(id);
        
        if (car == null)
        {
            return;
        }
        
        _context.Cars.Remove(car);
        await _context.SaveChangesAsync();
    }
}