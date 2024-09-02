import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://ofpbypitxcsxelopksvs.supabase.co/', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mcGJ5cGl0eGNzeGVsb3Brc3ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyMDU3MDcsImV4cCI6MjA0MDc4MTcwN30.YBlLLkdhfN9XmUV_OuWBbb-2bpYWjbRzFvTYy349PaY')