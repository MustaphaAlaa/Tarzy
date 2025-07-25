using Domain.IServices;
using Entities.Models;
using Entities.Models.DTOs;

namespace IServices;

public interface IOrderItemService
    : IServiceAsync<
        OrderItem,
        int,
        OrderItemCreateDTO,
        OrderItemDeleteDTO,
        OrderItemUpdateDTO,
        OrderItemReadDTO
    > { }
