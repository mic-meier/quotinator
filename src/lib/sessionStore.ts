import type { User } from '@supabase/supabase-js';
import { writable } from 'svelte/store';
import type { Quote } from './types';

export const user = writable<User | null | boolean | undefined>(false);

export const quotes = writable<Quote[] | null>(null);
