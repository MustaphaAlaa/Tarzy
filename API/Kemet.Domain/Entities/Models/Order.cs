using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models;

public class Order
{
    [Key]
    public int OrderId { get; set; }

    [Required]
    [ForeignKey("Customer")]
    public int CustomerId { get; set; }
    public virtual Customer Customer { get; set; }

    [Required]
    [ForeignKey("Address")]
    public int AddressId { get; set; }
    public virtual Address Address { get; set; }

    // /// <summary>
    // /// will be false, when the customer refuse to receipt the order.
    // /// true when the order is paid.
    // /// null when the order didn't receipt yet.
    // /// </summary>
    // public bool? IsPaid { get; set; }

    /// <summary>
    /// null when the order didn't receipt yet.
    /// if order is receipt, it'll take  value from OrderReceiptStatus table/Enum.
    /// </summary>
    [ForeignKey("OrderReceiptStatus")]
    public int? OrderReceiptStatusId { get; set; }
    public virtual OrderReceiptStatus OrderReceiptStatus { get; set; }

    /// <summary>
    /// for track the order status.
    /// default value is 1 (Pending).
    /// </summary>
    [ForeignKey("OrderStatus")]
    public int OrderStatusId { get; set; }
    public virtual OrderStatus OrderStatus { get; set; }

    [ForeignKey("DeliveryCompany")]
    public int DeliveryCompanyId { get; set; }
    public virtual DeliveryCompany DeliveryCompany { get; set; }

    public DateTime CreatedAt { get; set; }

    /// <summary>
    /// UpdateAt will be null until first update.
    /// </summary>
    public DateTime? UpdatedAt { get; set; }

    public ICollection<OrderItem> OrderItems { get; set; }
}


