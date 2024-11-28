// ### Student: 00016395


using CarRentalSystem_00016395.Models;
using CarRentalSystem_00016395.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CarRentalSystem_00016395.Controllers;

[Route("api/[controller]")]
[ApiController]

public class RentalController : ControllerBase
{
    private readonly IRental16395Repository _rentalRepository;
    
    public RentalController(IRental16395Repository rentalRepository)
    {
        _rentalRepository = rentalRepository;
    }
    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Rental_16395>>> GetRentals()
    {
        var rentals = await _rentalRepository.GetAllRentalsAsync();
        
        if (rentals == null)
        {
            return NotFound();
        }
        
        return Ok(rentals);
    }
    
    [HttpGet("{id}")]
    public async Task<ActionResult<Rental_16395>> GetRental(int id)
    {
        var rental = await _rentalRepository.GetRentalByIdAsync(id);
        
        if (rental == null)
        {
            return NotFound();
        }
        return Ok(rental);
    }
    
    [HttpPost]
    public async Task<ActionResult<Rental_16395>> CreateRental([FromBody] Rental_16395 rental)
    {
        if (rental == null)
        {
            return BadRequest("Rental data is required.");
        }

        await _rentalRepository.AddRentalAsync(rental);
        return CreatedAtAction(nameof(GetRental), new { id = rental.Id }, rental);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateRental(int id, Rental_16395 rental)
    {
        if (id != rental.Id)
        {
            return BadRequest("Rental ID mismatch.");
        }

        try
        {
            await _rentalRepository.UpdateRentalAsync(rental);
            return NoContent();
        }
        catch (KeyNotFoundException ex)
        {
            return NotFound(ex.Message);
        }
        catch (DbUpdateException ex)
        {
            return BadRequest(ex.Message);
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while updating the rental.");
        }
    }
    
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteRental(int id)
    {
        var rental = await _rentalRepository.GetRentalByIdAsync(id);
        
        if (rental == null)
        {
            return NotFound();
        }
        await _rentalRepository.DeleteRentalAsync(id);
        return NoContent();
    }
}