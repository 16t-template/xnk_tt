const CONFIG = {
            spreadsheetId: "1lkxlOmYkebWvkCCIrMGNl5yRCoFEsJIvYuvwSP_2LLQ",
            serviceAccountEmail: "test-gia-ason@api-test-sheet-161.iam.gserviceaccount.com",
            privateKey: `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC3NN84hLTkQPZd
Lj7niXZTICq7nHsuTn3J6r2Paq12m70/lYSmrwh1i0EStr9bO19QM8cevGlslwGr
WSVOLJlc6+w1HGPKvRXtA41kYV9MYIvpzIPQtkFE7Hxq71QyBARcv39Lfzze6Ioj
3G8VBvAKFLAnCUr97GHRv+KbCTFxPZupd3PEB+xS5ZUlzdBCEZvDid3iXaaEJJ+l
Td1apAGQHjtnDTLOkiTa8zf7X5ebALwnI9MziOdN8VyprHXGhkachPbKyrG0QwEs
2jtiI6Y5ULsBPjNefoavH8MKU5DEAT9h0fZ7KfsKYVMDuXqmEKBs0D3B4Z6aDZQW
wT2dDRZDAgMBAAECggEAEIuVoSzZVuFhaz1GI9ji0IacjvO50cIq7M8Zrj4/F756
Ew6PIhKENafAb7U4INm2AnzUMO8CqL9Jpxs85qUM3W4JysSByqLUiRW2184amIyb
j7jCXfLBTQn8AbHgrUepl5d/vBmFYMgon/mqjbNiGDb4FZgEQSkie5o6fi/dWp5d
NahbZl+WTOB/znhAfKh/zferHNxldR/ERmwOubZUerkqysWiBigc3ovpLSUof9ur
z3hNPPp0CKQjF40xuQc6FYTHUHMLuMvp78PXuc/mYqQmZ8VOGhU+faGtZ4m+QJly
dF5dS8U5cwKEF+ptuAUiWSahn6INb9yKn3+FcsW0UQKBgQDb8N4eWFvbgpRo/vxo
wBN2u2TWubj6clcrq/1a+VR0njC28Can0ogJHhrFhPxVs5D/rugs3HlbyAXJFptY
V0DZPCwBxGU5P5RbGjXWWEUXjp4ISKQD8WKfVlXNr79TqLdOg2NZBYQAi06Cpo/T
PV9l7LSG2Tj/9WdvD7W2wvrpaQKBgQDVPjpJN6xh7+sHtSU0mjKvrqigpHbuSQ/o
XpUaWSIpJffm5QpFPAOcTT5mHZCyllicJQIrfPSY+sH8n+sF03CUqVkV4Q2UqfOf
pFaLDB4P6SQ8iesZyF4VKFrj/cAvRJmp0e5W/DRnFkoEp+8c+nrru2+Dzm9kb7Uq
0CiltqYAywKBgBtcfrV1to+7Ue0x84KwintV2rifyDRX7yI+tjkQFYKgf1zyyUxN
c6D2vsvdvGqI+TvlrXqPPwW8/4NBrbeyux2LT8o0fYc+sp0WyKXOu2Gv21caelUH
PYam/eultn6Y2Z0J2V0kw4Qx0GWOhQv5cZnDdb3k3iNxixmU8b03ynEpAoGBAKEA
7O0fNe50QRZ+tOq0ihSPYQ55XrqnO3WNBDLynZJH8pbI1CpWF7vJrpVXOUs9rQWo
A61mGR/wJMtiywaJEHWOL48PbzuR3jno0NcHfSMyOoPi9jlvSWncIFQH4TVPLF5F
/Rh8L+ytrZE6YpWUoX6e9KGmGgDRPw5mQGpuL4RlAoGADe9n080SXlsUk4nHVjUz
Efv7EBoBkgOpqb9T1foRfJl46NxmmTOYV3iGIhjwcDskEg284k4iq/gH6EEFyEBc
Vz13jzB1nBgjfezFesVQz7bA/+Wik6HZtxAxVg38BKMt+Q1tYw9wOjbGPqOn++VC
sR2Sh8e3h3Knd6j1tceRIFU=
-----END PRIVATE KEY-----`,
            tokenUrl: "https://oauth2.googleapis.com/token",
            tabs: {
                'DS_SP': {
                    range: 'DS_SP!A2:D',
                    headers: ['id', 'ten_sp', 'ncc', 'ghi_chu'],
                    priceCols: [],
                    imgCol: -1
                },
                'XUAT_KHO': {
                    range: 'XUAT_KHO!A2:N',
                    headers: ['id', 'id_don', 'ngay', 'npp', 'id_sp', 'ten_sp', 'don_gia', 'slg', 'thanh_tien', 'id_nv', 'ghi_chu', 'vi_tri', 'tinh_trang', 'trang_thai'],
                    hiddenCols: [0],
                    priceCols: [6, 8],
                    imgCol: -1
                },
                'BC_XUAT_KHO': {
                    range: 'XUAT_KHO!A2:N',
                    sourceHeaders: ['id', 'id_don', 'ngay', 'npp', 'id_sp', 'ten_sp', 'don_gia', 'slg', 'thanh_tien', 'id_nv', 'ghi_chu', 'vi_tri', 'tinh_trang', 'trang_thai'],
                    headers: ['id_sp', 'so_luong'],
                    hiddenCols: [],
                    priceCols: [],
                    imgCol: -1,
                    reportType: 'xuat_kho_by_product',
                    readOnly: true
                },
                'NHAP_KHO': {
                    range: 'NHAP_KHO!A2:M',
                    headers: ['id', 'id_don', 'ngay', 'ncc', 'id_sp', 'ten_sp', 'don_gia', 'slg', 'thanh_tien', 'ghi_chu', 'vi_tri', 'tinh_trang', 'trang_thai'],
                    hiddenCols: [0],
                    priceCols: [6, 8],
                    imgCol: -1
                },
                'TON_KHO': {
                    range: 'TON_KHO!A2:I',
                    sheetHeaders: ['id', 'kho', 'id_sp', 'ten_sp', 'ton_dau', 'ton_cuoi', 'ghi_chu', 'tinh_trang', 'trang_thai'],
                    headers: ['id', 'kho', 'id_sp', 'ten_sp', 'ton_dau', 'nhap', 'xuat', 'ton_cuoi', 'ghi_chu', 'tinh_trang', 'trang_thai'],
                    hiddenCols: [0],
                    priceCols: [],
                    imgCol: -1
                },
                'KIEM_KHO': {
                    range: 'KIEM_KHO!A2:H',
                    headers: ['id', 'ngay', 'id_sp', 'slg_ton', 'thuc_te', 'slg_lech', 'vi_tri', 'ghi_chu'],
                    hiddenCols: [0],
                    priceCols: [],
                    imgCol: -1
                }
            }
        };

        const XNK_TT_TAB_STORAGE_KEY = 'xnkTtActiveTab';

        let currentTab = 'DS_SP', allData = [], accessToken = null, tokenExpiry = 0;
        let currentPage = 1, rowsPerPage = 150, filteredData = [];
        /** Map tên tab (tên sheet) → sheetId Google, cache nhẹ cho batchUpdate */
        let sheetTitleToIdCache = null;
        const TAB_LABELS = {
            DS_SP: 'DS_SP',
            XUAT_KHO: 'XUAT_KHO',
            BC_XUAT_KHO: 'BC_XUAT_KHO',
            NHAP_KHO: 'NHAP_KHO',
            TON_KHO: 'TON_KHO',
            KIEM_KHO: 'KIEM_KHO'
        };
        const ID_PREFIXES = {
            DS_SP: 'SP',
            XUAT_KHO: 'XK',
            BC_XUAT_KHO: 'BCXK',
            NHAP_KHO: 'NK',
            TON_KHO: 'TK',
            KIEM_KHO: 'KK'
        };
        const DEFAULT_ENUMS = {
            vi_tri: ['Kho', 'Ke', 'Quay', 'Cho xu ly']
        };
        let productCatalog = [];
        let customerCatalog = [];
        let inventoryStockByProduct = new Map();
        const PRODUCT_SUGGESTION_LIMIT = 50;
        const CUSTOMER_SUGGESTION_LIMIT = 50;
        const WAREHOUSE_PAGE_SIZE = 200;
        const DEFAULT_PAGE_SIZE = 150;

        function getRowsPerPageForTab(tabName) {
            return ['XUAT_KHO', 'BC_XUAT_KHO', 'NHAP_KHO', 'TON_KHO', 'KIEM_KHO'].includes(tabName)
                ? WAREHOUSE_PAGE_SIZE
                : DEFAULT_PAGE_SIZE;
        }

        async function getAccessToken() {
            if (accessToken && Date.now() < tokenExpiry - 300000) return accessToken;
            const header = { alg: "RS256", typ: "JWT" }, now = Math.floor(Date.now() / 1000),
                payload = { iss: CONFIG.serviceAccountEmail, scope: "https://www.googleapis.com/auth/spreadsheets", aud: CONFIG.tokenUrl, exp: now + 3600, iat: now };
            const sJWT = KJUR.jws.JWS.sign("RS256", JSON.stringify(header), JSON.stringify(payload), CONFIG.privateKey);
            const res = await fetch(CONFIG.tokenUrl, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${sJWT}` });
            const data = await res.json();
            accessToken = data.access_token; tokenExpiry = Date.now() + (data.expires_in * 1000);
            return accessToken;
        }

        async function switchTab(tabName) {
            currentTab = CONFIG.tabs[tabName] ? tabName : 'DS_SP';
            try { sessionStorage.setItem(XNK_TT_TAB_STORAGE_KEY, currentTab); } catch (_) { /* ignore */ }
            document.querySelectorAll('.tab').forEach(t => {
                t.classList.toggle('active', t.dataset.tab === currentTab);
            });
            rowsPerPage = getRowsPerPageForTab(currentTab);
            document.getElementById('mobileTabTitle') && (document.getElementById('mobileTabTitle').innerText = currentTab);
            closeMobileNav();
            document.getElementById('tableWrapper').style.display = 'block';
            document.getElementById('pagination').style.display = 'flex';
            document.getElementById('headerActions').style.display = 'flex';
            document.getElementById('pageTitle').innerText = 'XNK TT';
            const uploadBtn = document.getElementById('uploadBtn');
            const addBtn = document.getElementById('addBtn');
            const isReadOnly = !!CONFIG.tabs[currentTab].readOnly;
            if (uploadBtn) {
                uploadBtn.innerHTML = `<i data-lucide="upload" style="width:18px;"></i> Tai ${currentTab} Len`;
                uploadBtn.style.display = isReadOnly ? 'none' : 'flex';
                lucide.createIcons();
            }
            if (addBtn) addBtn.style.display = isReadOnly ? 'none' : 'flex';
            updateFilterVisibility();
            document.getElementById('searchInput').value = '';
            resetFilters();
            currentPage = 1;
            await fetchData();
        }

        function toggleSidebar() {
            document.body.classList.toggle('sidebar-collapsed');
            const icon = document.querySelector('.sidebar-toggle i');
            if (icon) {
                icon.setAttribute('data-lucide', document.body.classList.contains('sidebar-collapsed') ? 'panel-left-open' : 'panel-left-close');
                lucide.createIcons();
            }
        }

        function toggleMobileNav() {
            document.body.classList.toggle('mobile-nav-open');
        }

        function closeMobileNav() {
            document.body.classList.remove('mobile-nav-open');
        }

        function updateFilterVisibility() {
            const nccFilter = document.getElementById('nccFilter');
            const partnerFilter = document.getElementById('partnerFilter');
            const idDonFilter = document.getElementById('idDonFilter');
            const dateFromFilter = document.getElementById('dateFromFilter');
            const dateToFilter = document.getElementById('dateToFilter');
            const idSpFilter = document.getElementById('idSpFilter');
            const showPartner = currentTab === 'XUAT_KHO' || currentTab === 'BC_XUAT_KHO' || currentTab === 'NHAP_KHO';
            const showIdDon = showPartner;
            const showDate = showPartner;
            const showIdSp = currentTab === 'XUAT_KHO' || currentTab === 'BC_XUAT_KHO' || currentTab === 'NHAP_KHO' || currentTab === 'TON_KHO';

            if (nccFilter) nccFilter.style.display = currentTab === 'DS_SP' ? 'block' : 'none';
            if (partnerFilter) {
                partnerFilter.style.display = showPartner ? 'block' : 'none';
                partnerFilter.placeholder = (currentTab === 'XUAT_KHO' || currentTab === 'BC_XUAT_KHO') ? 'Loc NPP...' : 'Loc NCC...';
            }
            if (idDonFilter) idDonFilter.style.display = showIdDon ? 'block' : 'none';
            if (dateFromFilter) dateFromFilter.style.display = showDate ? 'block' : 'none';
            if (dateToFilter) dateToFilter.style.display = showDate ? 'block' : 'none';
            if (idSpFilter) idSpFilter.style.display = showIdSp ? 'block' : 'none';
        }

        async function reloadCurrentTab() {
            currentPage = 1;
            await fetchData();
            filterTable();
        }

        async function fetchData() {
            document.getElementById('loading').style.display = 'flex';
            document.querySelector('#loading p').innerText = `Đang tải dữ liệu ${currentTab}...`;
            try {
                const token = await getAccessToken();
                const tabConfig = CONFIG.tabs[currentTab];
                const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${tabConfig.range}`, { headers: { Authorization: `Bearer ${token}` } });
                const data = await res.json();
                const rawRows = data.values || [];
                allData = rawRows.map((row, i) => {
                    const arr = Array.isArray(row) ? row.slice() : [];
                    arr._sheetRow = i + 2;
                    return arr;
                });
                if (currentTab === 'TON_KHO') {
                    allData = await buildInventoryDisplayRows(allData, token);
                }
                filteredData = tabConfig.reportType === 'xuat_kho_by_product'
                    ? buildExportReportByProduct(allData)
                    : [...allData];
                populateFilters();
                renderHeaders();
                renderTable();
            } catch (e) {
                console.error("Lỗi khi tải dữ liệu:", e);
                alert("Không thể tải dữ liệu. Vui lòng kiểm tra lại sheet '" + currentTab + "' có tồn tại không.");
            } finally {
                document.getElementById('loading').style.display = 'none';
            }
        }

        function renderHeaders() {
            const head = document.getElementById('tableHead');
            const tabConfig = CONFIG.tabs[currentTab];
            const hiddenCols = tabConfig.hiddenCols || [];
            head.innerHTML = `<tr>${tabConfig.headers.map((h, idx) => hiddenCols.includes(idx) ? '' : `<th>${h}</th>`).join('')}</tr>`;
        }

        function normalizeRow(row) {
            const source = Array.isArray(row) ? row : [];
            if (currentTab === 'TON_KHO' && source.length >= CONFIG.tabs.TON_KHO.headers.length) {
                return [source[0], source[1], source[2], source[3], source[4], source[7], source[8], source[9], source[10]]
                    .map(cell => String(cell ?? '').trim());
            }
            return getStorageHeaders().map((_, idx) => String(source[idx] ?? '').trim());
        }

        function getStorageHeaders(tabName = currentTab) {
            const tabConfig = CONFIG.tabs[tabName];
            return tabConfig.sheetHeaders || tabConfig.headers;
        }

        async function fetchSheetRows(range, token = null) {
            const authToken = token || await getAccessToken();
            const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${range}`, {
                headers: { Authorization: `Bearer ${authToken}` }
            });
            if (!res.ok) return [];
            const data = await res.json();
            return data.values || [];
        }

        function sumMovementByProduct(rows, tabName) {
            const headers = CONFIG.tabs[tabName].sourceHeaders || getStorageHeaders(tabName);
            const idSpIdx = headers.indexOf('id_sp');
            const slgIdx = headers.indexOf('slg');
            const sums = new Map();
            rows.forEach(row => {
                const idSp = String(row[idSpIdx] || '').trim();
                if (!idSp) return;
                sums.set(idSp, (sums.get(idSp) || 0) + parseNumber(row[slgIdx]));
            });
            return sums;
        }

        async function buildInventoryDisplayRows(storageRows, token) {
            const [nhapRows, xuatRows] = await Promise.all([
                fetchSheetRows(CONFIG.tabs.NHAP_KHO.range, token),
                fetchSheetRows(CONFIG.tabs.XUAT_KHO.range, token)
            ]);
            const nhapByProduct = sumMovementByProduct(nhapRows, 'NHAP_KHO');
            const xuatByProduct = sumMovementByProduct(xuatRows, 'XUAT_KHO');

            return storageRows.map(row => {
                const idSp = String(row[2] || '').trim();
                const nhap = nhapByProduct.get(idSp) || 0;
                const xuat = xuatByProduct.get(idSp) || 0;
                const tonDau = parseNumber(row[4]);
                const display = [
                    row[0] || '',
                    row[1] || '',
                    row[2] || '',
                    row[3] || '',
                    row[4] || '',
                    nhap ? String(nhap) : '',
                    xuat ? String(xuat) : '',
                    String(tonDau + nhap - xuat),
                    row[6] || '',
                    row[7] || '',
                    row[8] || ''
                ];
                display._sheetRow = row._sheetRow;
                return display;
            });
        }

        async function loadInventoryStockMap() {
            const token = await getAccessToken();
            const tonKhoRows = await fetchSheetRows(CONFIG.tabs.TON_KHO.range, token);
            const [nhapRows, xuatRows] = await Promise.all([
                fetchSheetRows(CONFIG.tabs.NHAP_KHO.range, token),
                fetchSheetRows(CONFIG.tabs.XUAT_KHO.range, token)
            ]);
            const nhapByProduct = sumMovementByProduct(nhapRows, 'NHAP_KHO');
            const xuatByProduct = sumMovementByProduct(xuatRows, 'XUAT_KHO');
            inventoryStockByProduct = new Map();
            tonKhoRows.forEach(row => {
                const idSp = String(row[2] || '').trim();
                if (!idSp) return;
                const tonDau = parseNumber(row[4]);
                const nhap = nhapByProduct.get(idSp) || 0;
                const xuat = xuatByProduct.get(idSp) || 0;
                inventoryStockByProduct.set(idSp, tonDau + nhap - xuat);
            });
            return inventoryStockByProduct;
        }

        function colName(index) {
            let name = '';
            let num = index + 1;
            while (num > 0) {
                const rem = (num - 1) % 26;
                name = String.fromCharCode(65 + rem) + name;
                num = Math.floor((num - 1) / 26);
            }
            return name;
        }

        function getRowId(row) {
            return String((row && row[0]) || '').trim();
        }

        function getRowById(id) {
            const key = String(id || '').trim();
            if (!key) return null;
            return allData.find(row => getRowId(row) === key) || null;
        }

        function generateNextId(extraIds = []) {
            const ids = [...allData.map(getRowId), ...extraIds].filter(Boolean);
            const numericIds = ids.map(id => Number(id)).filter(n => Number.isFinite(n));
            if (numericIds.length === ids.length && numericIds.length) {
                return String(Math.max(...numericIds) + 1);
            }
            const now = new Date();
            const stamp = [
                now.getFullYear(),
                String(now.getMonth() + 1).padStart(2, '0'),
                String(now.getDate()).padStart(2, '0'),
                String(now.getHours()).padStart(2, '0'),
                String(now.getMinutes()).padStart(2, '0'),
                String(now.getSeconds()).padStart(2, '0')
            ].join('');
            let candidate = `${ID_PREFIXES[currentTab] || currentTab}-${stamp}`;
            let suffix = 1;
            while (ids.includes(candidate)) {
                suffix += 1;
                candidate = `${ID_PREFIXES[currentTab] || currentTab}-${stamp}-${suffix}`;
            }
            return candidate;
        }

        function generateIdForTab(tabName, ids = []) {
            const now = new Date();
            const stamp = [
                now.getFullYear(),
                String(now.getMonth() + 1).padStart(2, '0'),
                String(now.getDate()).padStart(2, '0'),
                String(now.getHours()).padStart(2, '0'),
                String(now.getMinutes()).padStart(2, '0'),
                String(now.getSeconds()).padStart(2, '0')
            ].join('');
            let candidate = `${ID_PREFIXES[tabName] || tabName}-${stamp}`;
            let suffix = 1;
            while (ids.includes(candidate)) {
                suffix += 1;
                candidate = `${ID_PREFIXES[tabName] || tabName}-${stamp}-${suffix}`;
            }
            return candidate;
        }

        function getProductNameById(id) {
            const key = String(id || '').trim();
            const item = productCatalog.find(product => product.id === key);
            return item ? item.ten_sp : '';
        }

        async function loadProductCatalog() {
            if (currentTab === 'DS_SP') {
                productCatalog = allData.map(row => ({ id: String(row[0] || '').trim(), ten_sp: String(row[1] || '').trim() })).filter(item => item.id);
                return productCatalog;
            }

            const token = await getAccessToken();
            const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/DS_SP!A2:D`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (!res.ok) throw new Error('Khong tai duoc danh sach san pham DS_SP.');
            const data = await res.json();
            productCatalog = (data.values || [])
                .map(row => ({ id: String(row[0] || '').trim(), ten_sp: String(row[1] || '').trim() }))
                .filter(item => item.id);
            return productCatalog;
        }

        async function loadCustomerCatalog() {
            const token = await getAccessToken();
            const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/DS_KHACH!A2:E`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (!res.ok) throw new Error('Khong tai duoc danh sach DS_KHACH.');
            const data = await res.json();
            customerCatalog = (data.values || [])
                .map(row => ({
                    id: String(row[0] || '').trim(),
                    type: String(row[1] || '').trim().toLowerCase(),
                    ten: String(row[2] || '').trim(),
                    sdt: String(row[3] || '').trim(),
                    dia_chi: String(row[4] || '').trim()
                }))
                .filter(item => item.id);
            return customerCatalog;
        }

        function toDateInputValue(value) {
            const raw = String(value || '').trim();
            if (!raw) return new Date().toISOString().slice(0, 10);
            if (/^\d{4}-\d{2}-\d{2}/.test(raw)) return raw.slice(0, 10);
            const m = raw.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{4})/);
            if (m) return `${m[3]}-${String(m[2]).padStart(2, '0')}-${String(m[1]).padStart(2, '0')}`;
            const parsed = Date.parse(raw);
            return Number.isNaN(parsed) ? '' : new Date(parsed).toISOString().slice(0, 10);
        }

        function parseNumber(value) {
            const n = Number(String(value || '').replace(/[.,\s]/g, ''));
            return Number.isFinite(n) ? n : 0;
        }

        function formatNumber(value) {
            const n = parseNumber(value);
            if (!n) return '';
            return new Intl.NumberFormat('vi-VN').format(n);
        }

        function formatNumberInput(input) {
            if (!input) return;
            input.value = formatNumber(input.value);
        }

        function formatNumberWhileTyping(input) {
            formatNumberInput(input);
            updateLineTotal();
        }

        function escapeHtml(value) {
            return String(value ?? '')
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }

        function setDatalistOptions(id, values) {
            const datalist = document.getElementById(id);
            if (!datalist) return;
            const counts = new Map();
            values.filter(Boolean).forEach(value => counts.set(value, (counts.get(value) || 0) + 1));
            const uniqueValues = [...counts.keys()].sort();
            datalist.innerHTML = uniqueValues
                .map(value => `<option value="${escapeHtml(value)}" label="${escapeHtml(value)} (${counts.get(value)})"></option>`)
                .join('');
        }

        function populateFilters() {
            const nccValues = allData.map(row => String(row[2] || '').trim()).filter(Boolean);
            setDatalistOptions('nccOptions', nccValues);
            const tabConfig = CONFIG.tabs[currentTab];
            const headers = tabConfig.sourceHeaders || tabConfig.headers;
            const partnerHeader = currentTab === 'NHAP_KHO' ? 'ncc' : 'npp';
            const partnerIdx = currentTab === 'XUAT_KHO' || currentTab === 'BC_XUAT_KHO' || currentTab === 'NHAP_KHO' ? headers.indexOf(partnerHeader) : -1;
            const idDonIdx = headers.indexOf('id_don');
            const idSpIdx = headers.indexOf('id_sp');
            const partnerValues = partnerIdx >= 0 ? allData.map(row => String(row[partnerIdx] || '').trim()).filter(Boolean) : [];
            const idDonValues = idDonIdx >= 0 ? allData.map(row => String(row[idDonIdx] || '').trim()).filter(Boolean) : [];
            const idSpValues = idSpIdx >= 0 ? allData.map(row => String(row[idSpIdx] || '').trim()).filter(Boolean) : [];
            setDatalistOptions('partnerFilterOptions', partnerValues);
            setDatalistOptions('idDonFilterOptions', idDonValues);
            setDatalistOptions('filterIdSpOptions', idSpValues);
        }

        function resetFilters() {
            ['nccFilter', 'partnerFilter', 'idDonFilter', 'dateFromFilter', 'dateToFilter', 'idSpFilter'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.value = '';
            });
        }

        function getDataSheetRow(row) {
            if (row && typeof row._sheetRow === 'number' && row._sheetRow >= 2) return row._sheetRow;
            const idx = allData.indexOf(row);
            return idx >= 0 ? idx + 2 : 0;
        }

        async function getSheetTitleToIdMap(token) {
            if (sheetTitleToIdCache) return sheetTitleToIdCache;
            const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}?fields=sheets(properties(sheetId,title))`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (!res.ok) throw new Error('Không đọc được metadata spreadsheet');
            const data = await res.json();
            const map = {};
            for (const s of data.sheets || []) {
                map[s.properties.title] = s.properties.sheetId;
            }
            sheetTitleToIdCache = map;
            return map;
        }

        async function writeRecordRow(row, sheetRow) {
            const token = await getAccessToken();
            const cleanRow = normalizeRow(row);
            const rowNum = Number(sheetRow);
            if (!rowNum || rowNum < 2) throw new Error('Khong xac dinh duoc dong can cap nhat.');
            const endCol = colName(getStorageHeaders().length - 1);

            const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${currentTab}!A${rowNum}:${endCol}${rowNum}?valueInputOption=RAW`, {
                method: 'PUT',
                headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({ values: [cleanRow] })
            });
            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                throw new Error(err.error?.message || 'Cap nhat dong that bai.');
            }
        }

        async function appendRecordRows(rows) {
            if (!rows.length) return;
            const token = await getAccessToken();
            const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${currentTab}!A2:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, {
                method: 'POST',
                headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({ values: rows.map(normalizeRow) })
            });
            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                throw new Error(err.error?.message || 'Them dong that bai.');
            }
        }

        async function appendRowsToSheet(tabName, rows) {
            if (!rows.length) return;
            const token = await getAccessToken();
            const cleanRows = rows.map(row => {
                const headers = getStorageHeaders(tabName);
                return headers.map((_, idx) => String(row[idx] ?? '').trim());
            });
            const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${tabName}!A2:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, {
                method: 'POST',
                headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({ values: cleanRows })
            });
            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                throw new Error(err.error?.message || `Them dong vao ${tabName} that bai.`);
            }
        }

        async function ensureInventoryForMovements(rows) {
            if (currentTab !== 'NHAP_KHO' && currentTab !== 'XUAT_KHO') return;
            const headers = getStorageHeaders();
            const idSpIdx = headers.indexOf('id_sp');
            const tenSpIdx = headers.indexOf('ten_sp');
            if (idSpIdx < 0) return;

            const token = await getAccessToken();
            const inventoryRows = await fetchSheetRows(CONFIG.tabs.TON_KHO.range, token);
            const knownProducts = new Set(inventoryRows.map(row => String(row[2] || '').trim()).filter(Boolean));
            const knownIds = inventoryRows.map(row => String(row[0] || '').trim()).filter(Boolean);
            const generatedIds = [];
            const rowsToAppend = [];

            rows.forEach(row => {
                const idSp = String(row[idSpIdx] || '').trim();
                if (!idSp || knownProducts.has(idSp)) return;
                const tenSp = String(row[tenSpIdx] || '').trim();
                const newId = generateIdForTab('TON_KHO', [...knownIds, ...generatedIds]);
                generatedIds.push(newId);
                knownProducts.add(idSp);
                rowsToAppend.push([newId, '', idSp, tenSp, '0', '0', '', '', '']);
            });

            await appendRowsToSheet('TON_KHO', rowsToAppend);
        }

        async function upsertRecordRows(rows) {
            const cleanRows = rows.map(normalizeRow).filter(row => row.some(cell => String(cell || '').trim()));
            const generatedIds = [];
            cleanRows.forEach(row => {
                if (!row[0]) {
                    const id = generateNextId(generatedIds);
                    row[0] = id;
                    generatedIds.push(id);
                }
            });
            if (!cleanRows.length) throw new Error('Khong co dong du lieu hop le.');

            const existingById = new Map(allData.map(row => [getRowId(row), row]).filter(([id]) => id));
            const updates = [];
            const appends = [];
            for (const row of cleanRows) {
                const existing = existingById.get(row[0]);
                if (existing) {
                    updates.push({ row, sheetRow: getDataSheetRow(existing) });
                } else {
                    appends.push(row);
                    existingById.set(row[0], row);
                }
            }

            for (const item of updates) {
                await writeRecordRow(item.row, item.sheetRow);
            }
            await appendRecordRows(appends);
            return { updated: updates.length, inserted: appends.length };
        }

        function getEnumValues(header) {
            const idx = getStorageHeaders().indexOf(header);
            const currentValues = idx >= 0 ? allData.map(row => String(row[idx] || '').trim()).filter(Boolean) : [];
            return [...new Set([...(DEFAULT_ENUMS[header] || []), ...currentValues])].sort();
        }

        function renderDatalistOptions(values) {
            return [...new Set(values.filter(Boolean).map(value => String(value).trim()))]
                .sort()
                .map(value => `<option value="${escapeHtml(value)}"></option>`)
                .join('');
        }

        function renderProductOptions(query = '') {
            const term = String(query || '').toLowerCase().trim();
            const matches = productCatalog
                .filter(product => {
                    if (!term) return true;
                    return product.id.toLowerCase().includes(term) || product.ten_sp.toLowerCase().includes(term);
                })
                .slice(0, PRODUCT_SUGGESTION_LIMIT);
            return matches.map(product => {
                return `<option value="${escapeHtml(product.id)}" label="${escapeHtml(product.id)} - ${escapeHtml(product.ten_sp)}"></option>`;
            }).join('');
        }

        function updateProductSuggestions() {
            const idSpInput = document.querySelector('[data-field="id_sp"]');
            const datalist = document.getElementById('productOptions');
            if (!idSpInput || !datalist) return;
            datalist.innerHTML = renderProductOptions(idSpInput.value);
        }

        async function updateProductName(syncActual = true) {
            const idSpInput = document.querySelector('[data-field="id_sp"]');
            const tenSpInput = document.querySelector('[data-field="ten_sp"]');
            if (!idSpInput) return;
            updateProductSuggestions();
            if (tenSpInput) {
                tenSpInput.value = getProductNameById(idSpInput.value);
            }
            if (currentTab === 'KIEM_KHO') {
                const slgTonInput = document.querySelector('[data-field="slg_ton"]');
                const thucTeInput = document.querySelector('[data-field="thuc_te"]');
                if (slgTonInput) {
                    let stock = '';
                    try {
                        if (idSpInput.value) {
                            if (!inventoryStockByProduct.size) {
                                await loadInventoryStockMap();
                            }
                            stock = inventoryStockByProduct.get(String(idSpInput.value).trim()) ?? 0;
                        } else {
                            stock = '';
                        }
                    } catch (e) {
                        console.error("Lỗi khi tải số lượng tồn kho cho kiểm kho:", e);
                    }
                    slgTonInput.value = formatNumber(stock);
                    if (thucTeInput && (syncActual || !thucTeInput.value)) {
                        thucTeInput.value = formatNumber(stock);
                    }
                    updateLineTotal();
                }
            }
        }

        function renderCustomerOptions(type, selectedId = '') {
            const term = String(selectedId || '').toLowerCase().trim();
            const items = getCustomerMatches(type, term);
            const hasSelected = selectedId && !items.some(customer => customer.id === selectedId);
            const fallback = hasSelected ? `<option value="${escapeHtml(selectedId)}" label="${escapeHtml(selectedId)}"></option>` : '';
            return fallback + items.map(customer => {
                const label = [customer.id, customer.ten, customer.sdt].filter(Boolean).join(' - ');
                return `<option value="${escapeHtml(customer.id)}" label="${escapeHtml(label)}"></option>`;
            }).join('');
        }

        function getCustomerMatches(type, query = '') {
            const term = String(query || '').toLowerCase().trim();
            return customerCatalog
                .filter(customer => customer.type === type)
                .filter(customer => {
                    if (!term) return true;
                    return customer.id.toLowerCase().includes(term)
                        || customer.ten.toLowerCase().includes(term)
                        || customer.sdt.toLowerCase().includes(term);
                })
                .slice(0, CUSTOMER_SUGGESTION_LIMIT);
        }

        function updateCustomerSuggestions(type) {
            const input = document.querySelector(`[data-field="${type}"]`);
            const panel = document.getElementById(`${type}Suggest`);
            if (!input || !panel) return;
            const matches = getCustomerMatches(type, input.value);
            if (!matches.length) {
                panel.classList.remove('active');
                panel.innerHTML = '';
                return;
            }
            panel.innerHTML = matches.map(customer => {
                const meta = [customer.ten, customer.sdt, customer.dia_chi].filter(Boolean).join(' | ');
                return `<button type="button" onclick="selectCustomerSuggestion('${type}', '${escapeHtml(customer.id)}')"><strong>${escapeHtml(customer.id)}</strong><span>${escapeHtml(meta)}</span></button>`;
            }).join('');
            panel.classList.add('active');
        }

        function selectCustomerSuggestion(type, id) {
            const input = document.querySelector(`[data-field="${type}"]`);
            const panel = document.getElementById(`${type}Suggest`);
            if (input) input.value = id;
            if (panel) panel.classList.remove('active');
        }

        function hideCustomerSuggestions(type) {
            window.setTimeout(() => {
                const panel = document.getElementById(`${type}Suggest`);
                if (panel) panel.classList.remove('active');
            }, 150);
        }

        function updateLineTotal() {
            if (currentTab === 'KIEM_KHO') {
                const slgTonInput = document.querySelector('[data-field="slg_ton"]');
                const thucTeInput = document.querySelector('[data-field="thuc_te"]');
                const slgLechInput = document.querySelector('[data-field="slg_lech"]');
                if (slgTonInput && thucTeInput && slgLechInput) {
                    const ton = parseNumber(slgTonInput.value);
                    const thuc = parseNumber(thucTeInput.value);
                    const lech = thuc - ton;
                    slgLechInput.value = formatNumber(lech);
                }
                return;
            }
            const donGiaInput = document.querySelector('[data-field="don_gia"]');
            const slgInput = document.querySelector('[data-field="slg"]');
            const totalInput = document.querySelector('[data-field="thanh_tien"]');
            if (!donGiaInput || !slgInput || !totalInput) return;
            totalInput.value = formatNumber(parseNumber(donGiaInput.value) * parseNumber(slgInput.value));
        }

        function adjustQuantity(delta) {
            const slgInput = document.querySelector('[data-field="slg"]') || document.querySelector('[data-field="thuc_te"]');
            if (!slgInput) return;
            const next = Math.max(0, parseNumber(slgInput.value) + delta);
            slgInput.value = formatNumber(next);
            updateLineTotal();
        }

        function getFormRowValue(row, header, idx) {
            if (!row) return '';
            if (currentTab === 'TON_KHO' && row.length >= CONFIG.tabs.TON_KHO.headers.length) {
                const displayIndexByHeader = {
                    id: 0,
                    kho: 1,
                    id_sp: 2,
                    ten_sp: 3,
                    ton_dau: 4,
                    ton_cuoi: 7,
                    ghi_chu: 8,
                    tinh_trang: 9,
                    trang_thai: 10
                };
                const displayIdx = displayIndexByHeader[header];
                return displayIdx === undefined ? '' : row[displayIdx] || '';
            }
            return row[idx] || '';
        }

        function renderFormFields(row = null) {
            const container = document.getElementById('formFields');
            const headers = getStorageHeaders();
            container.innerHTML = headers.map((header, idx) => {
                const rawValue = getFormRowValue(row, header, idx);
                const value = escapeHtml(rawValue);
                if (header === 'id') {
                    const idValue = row ? rawValue : generateNextId();
                    return `<input id="formField_${idx}" data-field="${header}" type="hidden" value="${escapeHtml(idValue)}">`;
                }
                if (header === 'id_nv') {
                    return `<input id="formField_${idx}" data-field="${header}" type="hidden" value="${value}">`;
                }
                const list = currentTab === 'DS_SP' && header === 'ncc' ? ' list="nccOptions"' : '';
                if (currentTab === 'DS_SP' && header === 'ncc') {
                    return `<label><span>${header}</span><input id="formField_${idx}" data-field="${header}" type="text" value="${value}"${list}></label>`;
                }
                if (header === 'ngay') {
                    return `<label><span>${header}</span><input id="formField_${idx}" data-field="${header}" type="date" value="${escapeHtml(toDateInputValue(rawValue))}"></label>`;
                }
                if (header === 'id_sp') {
                    return `<label><span>${header}</span><input id="formField_${idx}" data-field="${header}" type="text" value="${value}" list="productOptions" oninput="updateProductName()" onfocus="updateProductSuggestions()"><datalist id="productOptions">${renderProductOptions(String(rawValue || '').trim())}</datalist></label>`;
                }
                if (header === 'ncc' || header === 'npp') {
                    return `<label class="suggest-field"><span>${header}</span><input id="formField_${idx}" data-field="${header}" type="text" value="${value}" autocomplete="off" oninput="updateCustomerSuggestions('${header}')" onfocus="updateCustomerSuggestions('${header}')" onblur="hideCustomerSuggestions('${header}')"><div id="${header}Suggest" class="suggest-panel"></div></label>`;
                }
                if (header === 'ten_sp' && headers.includes('id_sp')) {
                    const nameValue = rawValue || getProductNameById(document.querySelector('[data-field="id_sp"]')?.value || '');
                    return `<label><span>${header}</span><input id="formField_${idx}" data-field="${header}" type="text" value="${escapeHtml(nameValue)}" readonly></label>`;
                }
                if (header === 'don_gia') {
                    return `<label><span>${header}</span><input id="formField_${idx}" data-field="${header}" type="text" inputmode="numeric" value="${escapeHtml(formatNumber(rawValue))}" oninput="formatNumberWhileTyping(this)"></label>`;
                }
                if (header === 'slg') {
                    return `<label><span>${header}</span><div class="stepper"><button type="button" onclick="adjustQuantity(-1)">-</button><input id="formField_${idx}" data-field="${header}" type="text" inputmode="numeric" value="${escapeHtml(formatNumber(rawValue || '0'))}" oninput="formatNumberWhileTyping(this)"><button type="button" onclick="adjustQuantity(1)">+</button></div></label>`;
                }
                if (header === 'thanh_tien') {
                    return `<label><span>${header}</span><input id="formField_${idx}" data-field="${header}" type="text" inputmode="numeric" value="${escapeHtml(formatNumber(rawValue))}" readonly></label>`;
                }
                if (header === 'slg_ton' || header === 'slg_lech') {
                    return `<label><span>${header}</span><input id="formField_${idx}" data-field="${header}" type="text" inputmode="numeric" value="${escapeHtml(formatNumber(rawValue))}" readonly></label>`;
                }
                if (header === 'thuc_te') {
                    return `<label><span>${header}</span><div class="stepper"><button type="button" onclick="adjustQuantity(-1)">-</button><input id="formField_${idx}" data-field="${header}" type="text" inputmode="numeric" value="${escapeHtml(formatNumber(rawValue || '0'))}" oninput="formatNumberWhileTyping(this)"><button type="button" onclick="adjustQuantity(1)">+</button></div></label>`;
                }
                if (header === 'vi_tri') {
                    return `<label><span>${header}</span><input id="formField_${idx}" data-field="${header}" type="text" value="${value}" list="viTriOptions"><datalist id="viTriOptions">${renderDatalistOptions(getEnumValues(header))}</datalist></label>`;
                }
                if (header === 'ghi_chu') {
                    return `<label><span>${header}</span><textarea id="formField_${idx}" data-field="${header}" rows="4">${value}</textarea></label>`;
                }
                return `<label><span>${header}</span><input id="formField_${idx}" data-field="${header}" type="text" value="${value}"${list}></label>`;
            }).join('');
            updateProductName(!row);
            updateLineTotal();
        }

        async function openRecordForm(rowIndex = null) {
            const modal = document.getElementById('productModal');
            const title = document.getElementById('productModalTitle');
            const row = rowIndex === null ? null : filteredData[rowIndex];
            try {
                await loadProductCatalog();
            } catch (err) {
                console.warn(err);
                productCatalog = [];
            }
            if (currentTab === 'XUAT_KHO' || currentTab === 'NHAP_KHO') {
                try {
                    await loadCustomerCatalog();
                } catch (err) {
                    console.warn(err);
                    customerCatalog = [];
                }
            }
            if (currentTab === 'KIEM_KHO') {
                try {
                    await loadInventoryStockMap();
                } catch (err) {
                    console.warn(err);
                    inventoryStockByProduct = new Map();
                }
            }
            document.getElementById('editingSheetRow').value = row ? getDataSheetRow(row) : '';
            renderFormFields(row);
            title.innerText = row ? `Sua ${currentTab}` : `Them moi ${currentTab}`;
            modal.classList.add('active');
            document.getElementById('formField_0')?.focus();
            lucide.createIcons();
        }

        function closeProductForm() {
            document.getElementById('productModal').classList.remove('active');
        }

        async function saveRecordFromForm(event) {
            event.preventDefault();
            updateLineTotal();
            const headers = getStorageHeaders();
            const row = headers.map((_, idx) => document.getElementById(`formField_${idx}`)?.value.trim() || '');
            ['don_gia', 'slg', 'thanh_tien', 'slg_ton', 'thuc_te', 'slg_lech'].forEach(field => {
                const idx = headers.indexOf(field);
                if (idx >= 0) row[idx] = String(parseNumber(row[idx]));
            });
            if (!row[0]) {
                row[0] = generateNextId();
            }

            document.getElementById('loading').style.display = 'flex';
            document.querySelector('#loading p').innerText = `Dang luu ${currentTab}...`;
            try {
                const editingSheetRow = Number(document.getElementById('editingSheetRow').value);
                const existing = getRowById(row[0]);
                const targetSheetRow = editingSheetRow || (existing ? getDataSheetRow(existing) : 0);
                if (targetSheetRow) {
                    await writeRecordRow(row, targetSheetRow);
                } else {
                    await appendRecordRows([row]);
                }
                await ensureInventoryForMovements([row]);
                closeProductForm();
                await fetchData();
                filterTable();
            } catch (err) {
                console.error(err);
                alert(`Khong luu duoc ${currentTab}: ` + err.message);
            } finally {
                document.getElementById('loading').style.display = 'none';
            }
        }

        async function init() {
            lucide.createIcons();
            document.getElementById('pageTitle').innerText = 'XNK TT';
            initDragAndDrop();
            let saved = '';
            try { saved = sessionStorage.getItem(XNK_TT_TAB_STORAGE_KEY) || ''; } catch (_) { }
            await switchTab(CONFIG.tabs[saved] ? saved : 'DS_SP');
        }

        function initDragAndDrop() {
            const body = document.body;
            const overlay = document.getElementById('dropOverlay');

            window.addEventListener('dragover', (e) => {
                e.preventDefault();
                overlay.classList.add('active');
            });

            window.addEventListener('dragleave', (e) => {
                if (e.relatedTarget === null) overlay.classList.remove('active');
            });

            window.addEventListener('drop', (e) => {
                e.preventDefault();
                overlay.classList.remove('active');
                if (e.dataTransfer.files.length > 0) {
                    processFiles(Array.from(e.dataTransfer.files));
                }
            });
        }

        function formatCurrency(val) {
            if (!val || isNaN(val)) return val;
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
        }
        function renderTable() {
            const tbody = document.getElementById('tableBody');
            const tabConfig = CONFIG.tabs[currentTab];

            const start = (currentPage - 1) * rowsPerPage;
            const end = start + rowsPerPage;
            const pageData = filteredData.slice(start, end);

            tbody.innerHTML = pageData.map((row, rowIndex) => {
                const hiddenCols = tabConfig.hiddenCols || [];
                const cells = tabConfig.headers.map((_, idx) => {
                    const cell = row[idx] || '';
                    if (hiddenCols.includes(idx)) return '';
                    if (idx === tabConfig.imgCol && cell) {
                        const firstImg = cell.split(',')[0].trim();
                        return `<td>
                            <div style="display:flex; align-items:center; gap:8px;">
                                <img src="${firstImg}" class="table-img" onerror="this.style.display='none'">
                                <a href="${cell.split(',')[0].trim()}" target="_blank" style="color: var(--primary); text-decoration: none; font-size: 11px; font-weight: 600;">Xem</a>
                            </div>
                        </td>`;
                    }
                    if (tabConfig.priceCols.includes(idx)) {
                        return `<td class="price-cell">${formatCurrency(cell)}</td>`;
                    }
                    const cellStr = String(cell || '').trim();
                    if (cellStr.startsWith('http://') || cellStr.startsWith('https://')) {
                        const parts = cellStr.split(',');
                        const linksHtml = parts.map((l, i) => `<a href="${l.trim()}" target="_blank" style="color: var(--primary); font-weight: 600; text-decoration: none;">Link ${parts.length > 1 ? i + 1 : ''}</a>`.trim());
                        return `<td>${linksHtml.join(', ')}</td>`;
                    }
                    return `<td>${escapeHtml(cell || '')}</td>`;
                }).join('');

                const editAction = tabConfig.readOnly ? '' : ` ondblclick="openRecordForm(${start + rowIndex})"`;
                return `<tr${editAction}>${cells}</tr>`;
            }).join('');

            renderPagination();
        }

        function renderPagination() {
            const totalRows = filteredData.length;
            const totalPages = Math.ceil(totalRows / rowsPerPage) || 1;
            const pagination = document.getElementById('pagination');

            if (totalRows <= rowsPerPage) {
                pagination.innerHTML = '';
                return;
            }

            pagination.innerHTML = `
                <button class="pagination-btn" onclick="changePage(-1)" ${currentPage === 1 ? 'disabled' : ''}>
                    <i data-lucide="chevron-left" style="width:16px;"></i> Trước
                </button>
                <div class="page-info">Trang ${currentPage} / ${totalPages} (${totalRows} dòng)</div>
                <button class="pagination-btn" onclick="changePage(1)" ${currentPage === totalPages ? 'disabled' : ''}>
                    Tiếp <i data-lucide="chevron-right" style="width:16px;"></i>
                </button>
            `;
            lucide.createIcons();
        }

        function changePage(delta) {
            currentPage += delta;
            renderTable();
            document.querySelector('.table-wrapper').scrollTop = 0;
        }

        function getFilterDateValue(value) {
            const normalized = toDateInputValue(value);
            return normalized ? Date.parse(normalized) : NaN;
        }

        function matchesBaseFilters(row) {
            const term = document.getElementById('searchInput').value.toLowerCase();
            const ncc = (document.getElementById('nccFilter')?.value || '').toLowerCase();
            const partner = (document.getElementById('partnerFilter')?.value || '').toLowerCase();
            const idDon = (document.getElementById('idDonFilter')?.value || '').toLowerCase();
            const idSp = (document.getElementById('idSpFilter')?.value || '').toLowerCase();
            const dateFrom = document.getElementById('dateFromFilter')?.value || '';
            const dateTo = document.getElementById('dateToFilter')?.value || '';
            const fromTime = dateFrom ? Date.parse(dateFrom) : NaN;
            const toTime = dateTo ? Date.parse(dateTo) : NaN;
            const headers = CONFIG.tabs[currentTab].sourceHeaders || CONFIG.tabs[currentTab].headers;
            const partnerHeader = currentTab === 'NHAP_KHO' ? 'ncc' : 'npp';
            const partnerIdx = headers.indexOf(partnerHeader);
            const idDonIdx = headers.indexOf('id_don');
            const idSpIdx = headers.indexOf('id_sp');
            const ngayIdx = headers.indexOf('ngay');
            const matchesSearch = row.some(cell => String(cell).toLowerCase().includes(term));
            const matchesProductNcc = currentTab !== 'DS_SP' || !ncc || String(row[2] || '').toLowerCase().includes(ncc);
            const matchesPartner = !(currentTab === 'XUAT_KHO' || currentTab === 'BC_XUAT_KHO' || currentTab === 'NHAP_KHO') || !partner || String(row[partnerIdx] || '').toLowerCase().includes(partner);
            const matchesIdDon = !(currentTab === 'XUAT_KHO' || currentTab === 'BC_XUAT_KHO' || currentTab === 'NHAP_KHO') || !idDon || String(row[idDonIdx] || '').toLowerCase().includes(idDon);
            const matchesIdSp = !(currentTab === 'XUAT_KHO' || currentTab === 'BC_XUAT_KHO' || currentTab === 'NHAP_KHO' || currentTab === 'TON_KHO') || !idSp || String(row[idSpIdx] || '').toLowerCase().includes(idSp);
            let matchesDate = true;
            if (currentTab === 'XUAT_KHO' || currentTab === 'BC_XUAT_KHO' || currentTab === 'NHAP_KHO') {
                const rowTime = getFilterDateValue(row[ngayIdx]);
                matchesDate = (!dateFrom || (Number.isFinite(rowTime) && rowTime >= fromTime))
                    && (!dateTo || (Number.isFinite(rowTime) && rowTime <= toTime));
            }
            return matchesSearch && matchesProductNcc && matchesPartner && matchesIdDon && matchesIdSp && matchesDate;
        }

        function buildExportReportByProduct(rows) {
            const headers = CONFIG.tabs.BC_XUAT_KHO.sourceHeaders;
            const idSpIdx = headers.indexOf('id_sp');
            const slgIdx = headers.indexOf('slg');
            const totals = new Map();
            rows.forEach(row => {
                const idSp = String(row[idSpIdx] || '').trim();
                if (!idSp) return;
                totals.set(idSp, (totals.get(idSp) || 0) + parseNumber(row[slgIdx]));
            });
            return [...totals.entries()]
                .sort((a, b) => a[0].localeCompare(b[0]))
                .map(([idSp, quantity]) => [idSp, String(quantity)]);
        }

        function filterTable() {
            const baseRows = allData.filter(matchesBaseFilters);
            filteredData = CONFIG.tabs[currentTab].reportType === 'xuat_kho_by_product'
                ? buildExportReportByProduct(baseRows)
                : baseRows;
            currentPage = 1;
            renderTable();
        }

        async function handleFileUpload(event) {
            const files = Array.from(event.target.files || []);
            if (!files.length) return;
            await processFiles(files);
            event.target.value = '';
        }

        function readExcelRows(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const data = new Uint8Array(e.target.result);
                        const workbook = XLSX.read(data, { type: 'array' });
                        const firstSheetName = workbook.SheetNames[0];
                        const worksheet = workbook.Sheets[firstSheetName];
                        let rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                        if (rows[0] && rows[0][0] && String(rows[0][0]).toUpperCase().includes("ID")) {
                            rows = rows.slice(1);
                        }
                        resolve(rows);
                    } catch (err) {
                        reject(err);
                    }
                };
                reader.onerror = () => reject(new Error(`Không thể đọc file ${file.name}`));
                reader.readAsArrayBuffer(file);
            });
        }

        function truncateExcelNumericCellsInRow(row) {
            if (!Array.isArray(row)) return row;
            return row.map(cell => {
                if (typeof cell === 'number' && Number.isFinite(cell)) return Math.trunc(cell);
                return cell;
            });
        }

        async function processFiles(files) {
            const excelFiles = files.filter(f => /\.(xlsx|xls|csv)$/i.test(f.name));
            if (!excelFiles.length) {
                alert("Vui long tai len file Excel hoac CSV.");
                return;
            }

            const fileNames = excelFiles.map(f => f.name).join(", ");
            const confirmMessage = `Du lieu tu ${excelFiles.length} file (${fileNames}) se cap nhat sheet '${currentTab}' theo id. Id da co se cap nhat, id moi se them dong. Tiep tuc?`;
            if (!confirm(confirmMessage)) return;

            document.getElementById('loading').style.display = 'flex';
            document.querySelector('#loading p').innerText = `Dang xu ly ${excelFiles.length} file va cap nhat Google Sheets...`;

            try {
                const rowsFromFiles = await Promise.all(excelFiles.map(readExcelRows));
                const allRowsToUpload = rowsFromFiles
                    .flat()
                    .filter(r => Array.isArray(r) && r.some(c => String(c || '').trim() !== ''))
                    .map(truncateExcelNumericCellsInRow);

                if (!allRowsToUpload.length) {
                    throw new Error("Khong co dong du lieu hop le de tai len.");
                }

                const result = await upsertRecordRows(allRowsToUpload);
                await ensureInventoryForMovements(allRowsToUpload.map(normalizeRow));
                alert(`Da cap nhat ${result.updated} dong va them moi ${result.inserted} dong vao sheet '${currentTab}'.`);
                try { sessionStorage.setItem(XNK_TT_TAB_STORAGE_KEY, currentTab); } catch (_) { }
                await fetchData();
                filterTable();
            } catch (err) {
                console.error(err);
                alert("Loi khi tai du lieu: " + err.message);
            } finally {
                document.getElementById('loading').style.display = 'none';
            }
        }

        init();
