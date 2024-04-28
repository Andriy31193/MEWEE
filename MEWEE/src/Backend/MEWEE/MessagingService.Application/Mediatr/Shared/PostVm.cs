﻿using System;

namespace MessagingService.Application.Mediatr.Shared;

public class PostVm
{
    public Guid Id { get; set; }
    public string Content { get; set; }
    public string Title { get; set; }
    public string? Attachment { get; set; }
    public string? Location { get; set; }
    public string Category { get; set; }
    public int LikesCount { get; set; }
    public Guid UserId { get; set; }
    public DateTime CreatedAt { get; set; }
}