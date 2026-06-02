# Ghi chu module DS_SP

## Cau truc file

- `index.html`: giao dien chinh, sidebar trai, thanh cong cu, bang du lieu va form them/sua san pham.
- `styles.css`: style cho layout, sidebar thu gon, bang, phan trang, bo loc va modal.
- `app.js`: logic doc/ghi Google Sheet cho cac module, tim kiem, loc, phan trang, upload/upsert, them moi va sua dong.

## Sheet du lieu

- Spreadsheet ID: `1lkxlOmYkebWvkCCIrMGNl5yRCoFEsJIvYuvwSP_2LLQ`

### DS_SP

- Sheet: `DS_SP`
- Vung doc: `DS_SP!A2:D`
- Cot du lieu:
  - `id`
  - `ten_sp`
  - `ncc`
  - `ghi_chu`

### XUAT_KHO

- Sheet: `XUAT_KHO`
- Vung doc: `XUAT_KHO!A2:R`
- Cot du lieu: `id`, `id_don`, `ngay`, `npp`, `id_sp`, `ten_sp`, `don_gia`, `slg`, `thanh_tien`, `slg_nhat`, `tich_nhat`, `slg_đi`, `tich_slg_di`, `id_nv`, `ghi_chu`, `vi_tri`, `tinh_trang`, `trang_thai`

### BC_XUAT_KHO

- Module bao cao xuat kho, doc tu sheet `XUAT_KHO`.
- Chi xem va loc du lieu, khong hien nut `Them moi`, khong upload, khong double click sua dong.
- Ho tro loc `npp`, tu ngay/den ngay va `id_sp`.
- Bang bao cao gom 2 cot: `id_sp`, `so_luong`; `so_luong` la tong `slg` theo tung `id_sp` sau khi ap dung bo loc.

### NHAP_KHO

- Sheet: `NHAP_KHO`
- Vung doc: `NHAP_KHO!A2:M`
- Cot du lieu: `id`, `id_don`, `ngay`, `ncc`, `id_sp`, `ten_sp`, `don_gia`, `slg`, `thanh_tien`, `ghi_chu`, `vi_tri`, `tinh_trang`, `trang_thai`

### DS_KHACH

- Sheet nguon goi y khach hang/nha cung cap: `DS_KHACH`
- Vung doc: `DS_KHACH!A2:E`
- Cot du lieu: `id`, `ncc_npp`, `ten`, `sdt`, `dia_chi`

### DSNV

- Sheet nguon dang nhap nhan vien: `DSNV`
- Vung doc: `DSNV!A2:G`
- Cot du lieu: `id`, `ho_ten`, `hinh_anh`, `gioi_tinh`, `ngay_sinh`, `quyen`, `mk`
- Ten dang nhap la `id`.
- Mat khau la `mk`.

### TON_KHO

- Sheet: `TON_KHO`
- Vung doc: `TON_KHO!A2:I`
- Cot du lieu that tren sheet: `id`, `kho`, `id_sp`, `ten_sp`, `ton_dau`, `ton_cuoi`, `ghi_chu`, `tinh_trang`, `trang_thai`
- Cot hien thi tren giao dien: `id`, `kho`, `id_sp`, `ten_sp`, `ton_dau`, `nhap`, `xuat`, `ton_cuoi`, `ghi_chu`, `tinh_trang`, `trang_thai`
- Hai cot `nhap` va `xuat` la cot ao, duoc tinh tu tong `slg` theo `id_sp` trong sheet `NHAP_KHO` va `XUAT_KHO`.
- `ton_cuoi` tren giao dien duoc tinh bang `ton_dau + nhap - xuat`.

### KIEM_KHO

- Sheet: `KIEM_KHO`
- Vung doc: `KIEM_KHO!A2:H`
- Cot du lieu: `id`, `ngay`, `id_sp`, `slg_ton`, `thuc_te`, `slg_lech`, `vi_tri`, `ghi_chu`
- Khi chon `id_sp`, cot `slg_ton` tu dong lay ton cuoi cua san pham trong `TON_KHO`.
- Cot `slg_ton` khong cho sua tren form.
- Cot `thuc_te` mac dinh bang `slg_ton`; nguoi dung co the sua `thuc_te` de ghi so kiem thuc te.
- Cot `slg_lech` tu dong tinh bang `thuc_te - slg_ton` va khong cho sua.

## Chuc nang giao dien

- Man dang nhap doc tai khoan tu sheet `DSNV`; chi vao app khi `id` va `mk` khop.
- Tai khoan co `quyen = KHO` khi vao `XUAT_KHO` chi thay cac cot: `id_don`, `ngay`, `npp`, `id_sp`, `ten_sp`, `slg`, `slg_nhat`, `tich_nhat`, `slg_đi`, `tich_slg_di`, `tinh_trang`, `trang_thai`.
- Trong view `XUAT_KHO` cua quyen `KHO`, cot `slg_nhat` cho nhap truc tiep tren bang va cot `tich_nhat` hien dang checkbox.
- Tren dien thoai, `XUAT_KHO` hien dang the thay vi bang ngang; moi the gom thong tin don, san pham, so luong, trang thai va cac truong thao tac nhanh.
- Sidebar trai co module `DS_SP`, `XUAT_KHO`, `BC_XUAT_KHO`, `NHAP_KHO`, `TON_KHO`, `KIEM_KHO`.
- Nut thu gon/mo rong sidebar dung `toggleSidebar()`.
- Tren dien thoai co thanh app co dinh phia tren, nut menu mo danh sach module dang drawer, nut load lai nam ngay tren thanh app.
- Bang hien thi cot theo module dang chon, khong co cot xoa.
- Cac module `XUAT_KHO`, `NHAP_KHO`, `TON_KHO`, `KIEM_KHO` an cot `id` tren bang; cot nay van duoc giu trong du lieu de cap nhat dung dong.
- Phan trang: `DS_SP` 150 dong/trang; `XUAT_KHO`, `BC_XUAT_KHO`, `NHAP_KHO`, `TON_KHO`, `KIEM_KHO` 200 dong/trang.
- Tim kiem nhanh: loc tren tat ca cot cua dong.
- Loc NCC: chi hien trong `DS_SP`; o nhap co goi y tu cac NCC cu kem so luong, co the go de loc theo mot phan ten NCC.
- `XUAT_KHO`: co loc `npp`, `id_don`, loc tu ngay/den ngay va loc `id_sp`.
- `NHAP_KHO`: co loc `ncc`, `id_don`, loc tu ngay/den ngay va loc `id_sp`.
- `TON_KHO`: co loc `id_sp`.
- Cac module `DS_SP`, `XUAT_KHO`, `NHAP_KHO`, `TON_KHO`, `KIEM_KHO` deu co nut `Them moi` va `Tai Excel len`.
- Nut `Load lai` tai lai du lieu module dang mo tu Google Sheet.

## Them va sua san pham

- Nut `Them moi` mo form dong theo module dang chon.
- Double click vao mot dong trong bang de mo form sua dong do.
- Form tu tao truong theo header cua module dang chon.
- Cot `id` tu sinh va khong hien tren form.
- Cot `ngay` hien dang date.
- Cot `id_sp` cho phep go va goi y tu sheet `DS_SP` theo dang `id - ten_sp`; de tranh lag chi hien toi da 50 goi y khop noi dung dang go. Cot `ten_sp` tu dong lay theo `id_sp`.
- Cot `ncc` trong `NHAP_KHO` chon tu sheet `DS_KHACH` voi `ncc_npp = ncc`.
- Cot `npp` trong `XUAT_KHO` chon tu sheet `DS_KHACH` voi `ncc_npp = npp`.
- Cot `slg` co nut `-` va `+` de giam/tang so luong.
- Cot `don_gia`, `slg`, `thanh_tien` hien dau cham phan tach hang nghin tren form; khi luu se ghi ve gia tri so. Cot `thanh_tien` tu dong tinh bang `don_gia * slg`.
- Cot `id_nv` tam an tren form.
- Cot `vi_tri` hien dang dropdown enum, lay tu gia tri co san va mot so gia tri mac dinh.
- Khi luu:
  - Neu dang sua dong cu, cap nhat dung dong dang sua.
  - Neu them moi ma `id` da ton tai, cap nhat dong co `id` do.
  - Neu `id` chua ton tai, them dong moi vao cuoi sheet.
  - Khi them/sua `NHAP_KHO` hoac `XUAT_KHO`, neu `id_sp` chua co trong `TON_KHO` thi tu dong them mot dong ton kho moi cho san pham do.

## Upload file

- Ho tro `.xlsx`, `.xls`, `.csv`.
- Doc sheet dau tien trong file upload.
- Neu dong dau tien co cot dau tien chua `ID`, bo dong header.
- Moi dong upload duoc chuan hoa theo so cot cua module dang chon.
- Logic upload la upsert theo `id`:
  - `id` da co trong sheet: cap nhat dong hien co.
  - `id` chua co trong sheet: them dong moi.
- Upload khong xoa toan bo sheet va ap dung cho module dang chon.

## Cac ham logic chinh trong app.js

- `fetchData()`: lay du lieu tu Google Sheet theo module dang chon va nap vao `allData`.
- `populateFilters()`: tao danh sach goi y NCC kem so luong tu du lieu `DS_SP`.
- `filterTable()`: ap dung tim kiem nhanh va cac bo loc.
- `renderTable()`: ve bang theo `filteredData` va trang hien tai.
- `renderPagination()`: ve nut phan trang.
- `openRecordForm(rowIndex)`: mo modal them/sua theo module dang chon; neu co `rowIndex` thi nap du lieu dong de sua.
- `saveRecordFromForm(event)`: luu form ve Google Sheet.
- `writeRecordRow(row, sheetRow)`: cap nhat mot dong co san tren sheet.
- `appendRecordRows(rows)`: them dong moi vao cuoi sheet.
- `upsertRecordRows(rows)`: cap nhat/them moi danh sach dong theo `id`.
- `processFiles(files)`: xu ly upload file va goi upsert.
- `toggleSidebar()`: thu gon/mo rong sidebar trai.
- `reloadCurrentTab()`: tai lai du lieu module dang mo.
# Cai app tren dien thoai

Ung dung da ho tro PWA. Khi website duoc mo bang HTTPS, trinh duyet Android se hien nut cai app co bieu tuong tai xuong tren thanh tren cung. Bam nut nay de dua XNK TT ra man hinh chinh.

- Android Chrome: mo website, bam nut tai xuong tren thanh app hoac chon `Add to Home screen`.
- iPhone Safari: mo website, bam `Share`, sau do chon `Add to Home Screen`.
- PWA can duoc chay bang HTTPS hoac localhost. Mo truc tiep file `index.html` se khong dang ky duoc service worker.
- Du lieu Google Sheets luon lay tu mang. Service worker chi luu bo khung giao dien de app mo nhanh hon.

# Cap nhat giao dien tren GitHub Pages

- Sau khi sua code, push cac file len nhanh GitHub Pages dang deploy.
- Moi ban giao dien can tang version `v=` trong `index.html`, URL dang ky `sw.js?v=` trong `app.js`, va `CACHE_NAME` cung danh sach file trong `sw.js`.
- App tu kiem tra service worker moi khi mo, kich hoat ban moi va reload mot lan.
- Service worker lay file giao dien theo network-first voi `cache: no-store`.
- GitHub Pages van co the can mot khoang ngan de deploy. Kiem tra tab `Actions` hoac `Deployments` tren GitHub neu web chua thay doi.

# KIEM_KHO offline

- Bam `Them moi` se mo form ngay bang cache cuc bo, khong cho tai lai DS_SP va TON_KHO.
- Khi luu dong KIEM_KHO moi, dong duoc luu vao bo nho tren may va hien ngay tren bang.
- Khi sua dong KIEM_KHO da co, thay doi cung duoc luu tren may ngay va dong bo sau.
- Neu co mang, app dong bo ngam len sheet `KIEM_KHO`.
- Neu mat mang, app giu hang doi va tu dong dong bo khi dien thoai co mang lai.
- Truoc khi append, app doc lai sheet va bo qua `id` da ton tai de han che trung dong khi mang chap chon.
- Nen mo module `KIEM_KHO` it nhat mot lan khi co mang de app luu cache DS_SP, TON_KHO va lich su kiem kho tren dien thoai.
- PWA khoa huong man hinh `portrait-primary` de giu giao dien dien thoai theo chieu doc.
- Khi chay trong trinh duyet web thong thuong, he dieu hanh co the khong cho website khoa xoay. Ban cai tren man hinh chinh ap dung on dinh hon.

# QR san pham

- Sheet `DS_SP` co thu tu cot: `id`, `ten_sp`, `ncc`, `ghi_chu`, `qr`.
- Form `KIEM_KHO` co o QR ao. QR khong ghi them vao sheet `KIEM_KHO`; app dung QR de tra `DS_SP.qr` va dien `id_sp`.
- Co the dung may quet cam tay de nhap vao o QR, hoac bam nut camera ben canh o QR tren dien thoai.
- Nut sua ben canh `id_sp` mo module `DS_SP` va mo dung san pham dang chon.
- Form sua `DS_SP` co nut camera ben canh o `qr` de quet va dien ma QR.
- Neu mo DS_SP tu form KIEM_KHO, footer form DS_SP co nut `Ve KIEM_KHO` de quay lai form kiem kho va tu dien lai `id_sp`.
- Camera QR can HTTPS va quyen truy cap camera. Neu trinh duyet khong ho tro camera QR, van dung duoc o QR voi may quet cam tay.
- Camera cung doc ma vach 1D thong dung: `EAN-13`, `EAN-8`, `UPC-A`, `UPC-E`, `Code 128`, `Code 39`, `ITF`, `Codabar`.
- Tem hang hoa co 13 chu so nhu `8935259822795` la `EAN-13`. Luu day du 13 chu so nay vao cot `DS_SP.qr`.
- Camera luon nhan va giu ma vua quet. Sau khi quet xong app moi tra `DS_SP.qr`: tim thay thi dien `id_sp`, chua tim thay thi van giu ma trong o QR de bo sung san pham sau.
