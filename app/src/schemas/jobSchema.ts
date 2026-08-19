import { z } from 'zod';

export const JobSchema = z.object({
  title: z.string().min(1, 'Job title is required'),
  company: z.string().min(1, 'Company name is required'),
  status: z.enum(['Wishlist', 'Applied', 'Interviewing', 'Offered', 'Rejected', 'Archived']),
  jobType: z.enum(['Remote', 'On-site', 'Hybrid']),
  salaryRange: z.string().optional(),
  location: z.string().optional(),
  jobDescription: z.string().optional(),
  recruiterContact: z.string().optional(),
  notes: z.string().optional(),
  appliedDate: z.string().optional(),
});

export type JobFormData = z.infer<typeof JobSchema>;