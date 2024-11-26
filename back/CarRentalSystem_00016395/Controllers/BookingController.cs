// ### Student: 00016395


using CarRentalSystem_00016395.Data;
using CarRentalSystem_00016395.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CarRentalSystem_00016395.Controllers;

[Route("api/[controller]")]
[ApiController]

public class BookingController : ControllerBase
{
    private readonly CRDbContext_16395 _context;
    
    public BookingController(CRDbContext_16395 context)
    {
        _context = context;
    }
    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Rental_16395>>> GetRentals()
    {
        if (_context.Rentals == null)
        {
            return NotFound();
        }
        
        return await _context.Rentals.ToListAsync();
    }
    
    [HttpGet("{id}")]
    public async Task<ActionResult<Rental_16395>> GetRental(int id)
    {
        var rental = await _context.Rentals.FindAsync(id);
        
        if (rental == null)
        {
            return NotFound();
        }
        
        return rental;
    }
    
    [HttpPost]
    public async Task<ActionResult<Rental_16395>> CreateRental(Rental_16395 rental)
    {
        _context.Rentals.Add(rental);
        await _context.SaveChangesAsync();
        
        return CreatedAtAction("GetRental", new { id = rental.Id }, rental);
    }
    
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateRental(int id, Rental_16395 rental)
    {
        if (id != rental.Id)
        {
            return BadRequest();
        }
        
        _context.Entry(rental).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        
        return NoContent();
    }
    
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteRental(int id)
    {
        var rental = await _context.Rentals.FindAsync(id);
        
        if (rental == null)
        {
            return NotFound();
        }
        
        _context.Rentals.Remove(rental);
        await _context.SaveChangesAsync();
        
        return NoContent();
    }
}