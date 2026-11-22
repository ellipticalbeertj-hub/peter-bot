-- รันครั้งเดียวใน Supabase > SQL Editor (โปรเจกต์ PXPSHOP) — ไม่กระทบข้อมูลเดิม
-- 1) ช่อง "คำอธิบาย" ของหมวดหมู่
alter table public.categories add column if not exists description text;
-- 2) ถังสินค้าที่ลบแล้ว (ลบ = ซ่อนไว้ กู้คืนได้จากลิงก์ "ลบสินค้าแล้ว")
alter table public.products add column if not exists deleted_at timestamptz;
-- 3) ขยายขีดจำกัดไฟล์รูปในที่เก็บ product-images จาก 5MB เป็น 10MB (ให้ตรงกับข้อความ "สูงสุด 10MB" ในหน้าหมวดหมู่)
update storage.buckets set file_size_limit = 10485760 where id = 'product-images';
-- (ข้อ 1-2 ฐานข้อมูล PXPSHOP ของคุณมีคอลัมน์ครบแล้ว รันซ้ำได้ไม่เป็นไร)
-- ตั้งวันหมดอายุแพ็กเกจร้าน (ให้การ์ดสถานะด้านบนนับถอยหลัง) ตัวอย่าง:
-- update public.shop_secrets set rent_expires_at = '2026-12-17 18:27:00+07' where id = 1;
