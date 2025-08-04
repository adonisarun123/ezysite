-- Create storage buckets for file uploads
INSERT INTO storage.buckets (id, name, public) 
VALUES 
  ('agent-documents', 'agent-documents', false),
  ('helper-documents', 'helper-documents', false)
ON CONFLICT (id) DO NOTHING;

-- Create policies for agent documents bucket
CREATE POLICY "Allow anonymous uploads to agent-documents"
  ON storage.objects FOR INSERT 
  WITH CHECK (bucket_id = 'agent-documents');

CREATE POLICY "Allow public read access to agent-documents"
  ON storage.objects FOR SELECT 
  USING (bucket_id = 'agent-documents');

CREATE POLICY "Allow authenticated delete from agent-documents"
  ON storage.objects FOR DELETE 
  USING (bucket_id = 'agent-documents' AND auth.role() = 'authenticated');

-- Create policies for helper documents bucket
CREATE POLICY "Allow anonymous uploads to helper-documents"
  ON storage.objects FOR INSERT 
  WITH CHECK (bucket_id = 'helper-documents');

CREATE POLICY "Allow public read access to helper-documents"
  ON storage.objects FOR SELECT 
  USING (bucket_id = 'helper-documents');

CREATE POLICY "Allow authenticated delete from helper-documents"
  ON storage.objects FOR DELETE 
  USING (bucket_id = 'helper-documents' AND auth.role() = 'authenticated');