// Mock data for orders
let orders = [
    {
        id: 'ORD-007',
        customerName: 'هيفاء المالكي',
        customerPhone: '0539463987',
        discount: 'لا يوجد',
        status: 'cancelled',
        orderTime: '2024-11-10T09:45:00',
        items: [
            { name: 'سندويش أوصال', quantity: 2, price: 14.00 },
            { name: 'عصير رمان', quantity: 2, price: 5.00 }
        ],
        branch: 'ساروجة السليمانية',
        branchPhone: '0572519542',
        location: 'https://maps.app.goo.gl/jJC212zgf1nwy67a6',
        total: 33.00,
        paymentMethod: 'بطاقة ائتمان',
        estimatedTime: '30 دقيقة'
    },
    {
        id: 'ORD-006',
        customerName: "عبد المالك العالم",
        customerPhone: '0561297832',
        discount: 'لا يوجد',
        status: 'rejected',
        orderTime: '2024-03-10T09:45:00',
        items: [
            { name: 'سندويش شاورما', quantity: 3, price: 18.00 },
            { name: 'عصير برتقال', quantity: 3, price: 12.00 }
        ],
        branch: 'بيت الشاورما السليمانية',
        branchPhone: '0572519542',
        location: 'https://maps.app.goo.gl/jJC212zgf1nwy67a6',
        total: 90.00,
        paymentMethod: 'بطاقة ائتمان',
        estimatedTime: '15 دقيقة'
    },
    {
        id: 'ORD-005',
        customerName: 'فاطمة علي',
        customerPhone: '0507654321',
        discount: 'لا يوجد',
        status: 'processing',
        orderTime: '2024-03-10T11:15:00',
        items: [
            { name: 'بيتزا مارجريتا', quantity: 1, price: 45.00 },
            { name: 'سلطة خضراء', quantity: 1, price: 20.00 }
        ],
        branch: 'لورينزو المروج',
        branchPhone: '0572519542',
        location: 'https://maps.app.goo.gl/jJC212zgf1nwy67a6',
        total: 65.00,
        paymentMethod: 'نقدي',
        estimatedTime: '25 دقيقة'
    },
    {
        id: 'ORD-004',
        customerName: 'هبة سالم',
        customerPhone: '0507639217',
        discount: 'لا يوجد',
        status: 'completed',
        orderTime: '2024-03-10T09:45:00',
        items: [
            { name: 'الفريدو فتوتشيني', quantity: 1, price: 22.00 },
            { name: 'كينزا', quantity: 1, price: 2.00 }
        ],
        branch: 'كازاباستا المعذر',
        branchPhone: '0572519542',
        location: 'https://maps.app.goo.gl/jJC212zgf1nwy67a6',
        total: 24.00,
        paymentMethod: 'بطاقة ائتمان',
        estimatedTime: '15 دقيقة'
    },
    {
        id: 'ORD-003',
        customerName: 'هيفاء المالكي',
        customerPhone: '0539463987',
        discount: 'لا يوجد',
        status: 'cancelled',
        orderTime: '2024-11-10T09:45:00',
        items: [
            { name: 'سندويش أوصال', quantity: 2, price: 14.00 },
            { name: 'عصير رمان', quantity: 2, price: 5.00 }
        ],
        branch: 'ساروجة السليمانية',
        branchPhone: '0572519542',
        location: 'https://maps.app.goo.gl/jJC212zgf1nwy67a6',
        total: 33.00,
        paymentMethod: 'بطاقة ائتمان',
        estimatedTime: '30 دقيقة'
    },
    {
        id: 'ORD-002',
        customerName: 'سارة أحمد',
        customerPhone: '0503456789',
        discount: 'لا يوجد',
        status: 'ready',
        orderTime: '2024-03-30T11:53:00',
        items: [
            { name: 'سندويش شاورما', quantity: 3, price: 18.00 },
            { name: 'عصير برتقال', quantity: 3, price: 12.00 }
        ],
        branch: 'بيت الشاورما السليمانية',
        branchPhone: '0572519542',
        location: 'https://maps.app.goo.gl/jJC212zgf1nwy67a6',
        total: 90.00,
        paymentMethod: 'بطاقة ائتمان',
        estimatedTime: '25 دقيقة'
    },
    {
        id: 'ORD-001',
        customerName: 'أحمد محمد',
        customerPhone: '0501234567',
        discount: 'لا يوجد',
        status: 'new',
        orderTime: '2024-03-10T10:30:00',
        items: [
            { name: 'برجر دجاج', quantity: 2, price: 25.00 },
            { name: 'بطاطس مقلية', quantity: 1, price: 15.00 },
            { name: 'كوكا كولا', quantity: 1, price: 10.00 }
        ],
        branch: 'ساين الصحافة',
        branchPhone: '0572519542',
        location: 'https://maps.app.goo.gl/jJC212zgf1nwy67a6',
        total: 75.00,
        paymentMethod: 'بطاقة ائتمان',
        estimatedTime: '20 دقيقة'
    }
];

let audioEnabled = true;
let currentFilter = 'all';
let selectedOrder = null;

// Audio notification
function playNotificationSound() {
    if (!audioEnabled) return;

    // Create audio context and play bell sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

// Toggle audio
function toggleAudio() {
    audioEnabled = !audioEnabled;
    const button = document.getElementById('audioToggle');
    if (audioEnabled) {
        button.innerHTML = `<i class="fas fa-volume-up"></i>`;
        button.classList.remove('muted');
    } else {
        button.innerHTML = `<i class="fas fa-volume-mute"></i>`;
        button.classList.add('muted');
    }
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');

    notificationText.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Format time
function formatTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-SA', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-SA', {
        month: "long",
        day: "numeric",
        year: "numeric" 
    });
}

// Get status display
function getStatusDisplay(status) {
    const statusMap = {
        'new': 'طلب جديد',
        'processing': 'قيد التجهيز',
        'ready': 'جاهز للاستلام',
        'completed': 'مكتمل',
        'rejected': 'مرفوض',
        'cancelled': 'ملغي'
    };
    return statusMap[status] || status;
}

// Get status class
function getStatusClass(status) {
    return `status-${status}`;
}

// Update statistics
function updateStats() {
    const stats = {
        total: orders.length,
        new: orders.filter(o => o.status === 'new').length,
        processing: orders.filter(o => o.status === 'processing').length,
        ready: orders.filter(o => o.status === 'ready').length,
        completed: orders.filter(o => o.status === 'completed').length,
        rejected: orders.filter(o => o.status === 'rejected').length,
        cancelled: orders.filter(o => o.status === 'cancelled').length
    };

    document.getElementById('totalOrders').textContent = `(${stats.total})`;
    document.getElementById('newOrders').textContent = `(${stats.new})`;
    document.getElementById('processingOrders').textContent = `(${stats.processing})`;
    document.getElementById('readyOrders').textContent = `(${stats.ready})`;
    document.getElementById('completedOrders').textContent = `(${stats.completed})`;
    document.getElementById('rejectedOrders').textContent = `(${stats.rejected})`;
    document.getElementById('cancelledOrders').textContent = `(${stats.cancelled})`;
}

// Render orders
function renderOrders() {
    const grid = document.getElementById('ordersGrid');
    const filteredOrders = currentFilter === 'all' ?
        orders : orders.filter(order => order.status === currentFilter);

    grid.innerHTML = filteredOrders.map(order => `
        <div class="order-card ${order.status}" onclick="openOrderModal('${order.id}')">
            <div">
            <p>${formatDate(order.orderTime)}</p>
            <p>${formatTime(order.orderTime)}</p>
            <h3>#${order.id}</h3>
            <p>${order.customerPhone}</p>
            <p>${order.branch}</p>
            </div>
        </div>
    `).join('');
}

// Open order modal
function openOrderModal(orderId) {
    selectedOrder = orders.find(order => order.id === orderId);
    if (!selectedOrder) return;

    const modal = document.getElementById('orderModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="detail-section ${selectedOrder.status}">
            <div class="status-selector">
                <div class="detail-row">
                    <select class="${selectedOrder.status}" id="statusSelect" onchange="updateOrderStatus('${orderId}', this.value)">
                        <option value="" disabled selected>حالة الطلب</option>
                        <option value="new" ${selectedOrder.status === 'new' ? '' : ''}>طلب جديد</option>
                        <option value="processing" ${selectedOrder.status === 'processing' ? '' : ''}>قيد التجهيز</option>
                        <option value="ready" ${selectedOrder.status === 'ready' ? '' : ''}>جاهز للاستلام</option>
                        <option value="completed" ${selectedOrder.status === 'completed' ? '' : ''}>مكتمل</option>
                        <option value="rejected" ${selectedOrder.status === 'rejected' ? '' : ''}>مرفوض</option>
                        <option value="cancelled" ${selectedOrder.status === 'cancelled' ? '' : ''}>ملغي</option>
                    </select>
                </div>
            </div>
            <div class="detail-row">
                <span">الحالة:</span>
                <span ${getStatusClass(selectedOrder.status)}">${getStatusDisplay(selectedOrder.status)}</span>
            </div>
            <div class="detail-row">
                <span">الطلب:</span>
                <span">#${selectedOrder.id}</span>
            </div>
            <div class="detail-row">
                <span">التاريخ:</span>
                <span">${formatDate(selectedOrder.orderTime)}</span>
            </div>
            <div class="detail-row">
                <span">الوقت:</span>
                <span">${formatTime(selectedOrder.orderTime)}</span>
            </div>
            <div class="detail-row">
                <span">الوقت المتوقع:</span>
                <span">${selectedOrder.estimatedTime}</span>
            </div>

            <div class="detail-row">
                <span">العميل:</span>
                <span">${selectedOrder.customerName}</span>
                <span class="stat-number"">(${selectedOrder.customerPhone})</span>
            </div>
            <div class="detail-row">
                <span">الدفع:</span>
                <span">${selectedOrder.paymentMethod}</span>
            </div>
            <div class="detail-row">
                <span">القيمة:</span>
                <span">${selectedOrder.total.toFixed(2)} ريال</span>
            </div>
            <div class="detail-row">
                <span">الخصم:</span>
                <span">${selectedOrder.discount}</span>
            </div>
            
            <div class="detail-row">
                <span">الأصناف:</span>
                <span">${selectedOrder.items.map(item => `
                    ${item.quantity} ${item.name} <span class="stat-number">(${(item.price * item.quantity).toFixed(2)} ريال) </span> </span>
                `).join('،')}</span>
            </div>
            <div class="detail-row">
                <span">الفرع:</span>
                <span">${selectedOrder.branch}</span>
                <span class="stat-number"">(${selectedOrder.branchPhone})</span>
            </div>
            <div class="detail-row">
                <span">الموقع:</span>
                <a  class="stat-number ${selectedOrder.status}" style = "font-weight: 100;" href="${selectedOrder.location}" rel="stylesheet">${selectedOrder.location}</a>
            </div>
            
            <div class="items-list">
            </div>
            <div class="actions">
                <button class="action-btn" id="copyOrderDetailsAr">
                    نسخ بالعربي
                </button>
                <button class="action-btn" id="saveOrderCardAr">
                    حفظ بالعربي
                </button>
                <button class="action-btn" id="copyOrderDetailsEn">
                    نسخ بالإنجليزي
                </button>
                <button class="action-btn" id="saveOrderCardEn">
                    حفظ بالإنجليزي
                </button>
            </div>
                
            <div class="actions"> 
                <button class="action-btn" id="printOrder">
                    طباعة الطلب
                </button>                   
                <button class="action-btn" id="refundOrder">
                    استرداد قيمة الطلب
                </button>
                <button class="action-btn" id="copyCancellationMessage">
                    نسخ رسالة الإلغاء
                </button>
            </div>
            <div class="actions">
            </div>
        </div>
    `;

    // Attach event listeners to the buttons after they are in the DOM
    document.getElementById('copyOrderDetailsAr').addEventListener('click', copyOrderDetailsAr);
    document.getElementById('saveOrderCardAr').addEventListener('click', saveOrderCardAr);
    document.getElementById('copyOrderDetailsEn').addEventListener('click', copyOrderDetailsEn); 
    document.getElementById('saveOrderCardEn').addEventListener('click', saveOrderCardEn); 

    document.getElementById('printOrder').addEventListener('click', printOrder);
    document.getElementById('refundOrder').addEventListener('click', refundOrder);
    document.getElementById('copyCancellationMessage').addEventListener('click', copyCancellationMessage);

    // Ensure the status select also has its listener re-attached
    document.getElementById('statusSelect').addEventListener('change', function() {
        updateOrderStatus(orderId, this.value);
    });

    showHideOrderButtons(); // Call this AFTER buttons are in DOM and listeners are attached
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('orderModal').style.display = 'none';
}

// Update order status
function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        renderOrders();
        updateStats();
        showNotification(`تم تحديث حالة الطلب #${orderId} إلى: ${getStatusDisplay(newStatus)}`);
    }
}

// Helper function to show an element
function showElement(element) {
    if (element) 
        element.classList.remove('hide'); // Or 'block', 'flex' depending on your layout
}

// Helper function to hide an element
function hideElement(element) {
    if (element) 
        element.classList.add('hide');
}

function showHideOrderButtons(){
    // 1. Get references to the buttons
    const copyOrderDetailsAr = document.getElementById('copyOrderDetailsAr');
    const saveOrderCardAr = document.getElementById('saveOrderCardAr');
    const copyOrderDetailsEn = document.getElementById('copyOrderDetailsEn');
    const saveOrderCardEn = document.getElementById('saveOrderCardEn');
    const refundOrder = document.getElementById('refundOrder');
    const copyCancellationMessage = document.getElementById('copyCancellationMessage');

    // 2. Hide all buttons initially
    [
        refundOrder,
        copyOrderDetailsAr,
        saveOrderCardAr,
        copyOrderDetailsEn,
        saveOrderCardEn,
        copyCancellationMessage
    ].forEach(button => hideElement(button));


    // 3. Implement conditional logic based on order status
    if (selectedOrder.status === 'ready' || selectedOrder.status === 'processing') {
        showElement(refundOrder);
        showElement(copyOrderDetailsAr);
        showElement(saveOrderCardAr);
        showElement(copyOrderDetailsEn);
        showElement(saveOrderCardEn);
    } else if (selectedOrder.status === 'cancelled') {
        showElement(copyCancellationMessage);
    }
}

// Copy order details
function copyOrderDetailsAr() {
    if (!selectedOrder) return;

    const orderText = `
📋 تفاصيل الطلب #${selectedOrder.id}
================================

👤 معلومات العميل:
الاسم: ${selectedOrder.customerName}
الهاتف: ${selectedOrder.customerPhone}

📅 معلومات الطلب:
وقت الطلب: ${formatTime(selectedOrder.orderTime)} - ${formatDate(selectedOrder.orderTime)}
الحالة: ${getStatusDisplay(selectedOrder.status)}
الوقت المتوقع: ${selectedOrder.estimatedTime}
طريقة الدفع: ${selectedOrder.paymentMethod}
الخصم: ${selectedOrder.discount}
الفرع: ${selectedOrder.branch}
رقم الفرع: ${selectedOrder.branchPhone}
الموقع: ${selectedOrder.location}

🛒 تفاصيل الطلب:
${selectedOrder.items.map(item => `${item.name} × ${item.quantity} = ${(item.price * item.quantity).toFixed(2)} ريال`).join('\n')}

💰 المجموع الكلي: ${selectedOrder.total.toFixed(2)} ريال

    `.trim();

    navigator.clipboard.writeText(orderText).then(() => {
        showNotification('تم نسخ تفاصيل الطلب بنجاح!');
    }).catch(() => {
        showNotification('فشل في نسخ التفاصيل', 'error');
    });
}

// Save order card
function saveOrderCardAr() {
    if (!selectedOrder) return;

    const orderData = {
        ...selectedOrder,
        savedAt: new Date().toISOString()
    };

    // Save to localStorage (mock implementation)
    const savedOrders = JSON.parse(localStorage.getItem('savedOrders') || '[]');
    savedOrders.push(orderData);
    localStorage.setItem('savedOrders', JSON.stringify(savedOrders));

    showNotification('تم حفظ بطاقة الطلب بنجاح!');
}

// Copy order details English
function copyOrderDetailsEn() {
    if (!selectedOrder) return;

    const orderText = `
📋 Order Details #${selectedOrder.id}
================================

👤 Customer Information:
Name: ${selectedOrder.customerName}
Phone: ${selectedOrder.customerPhone}

📅 Order Information:
Order Time: ${formatTime(selectedOrder.orderTime)} - ${formatDate(selectedOrder.orderTime)}
Status: ${selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
Estimated Time: ${selectedOrder.estimatedTime}
Payment Method: ${selectedOrder.paymentMethod}
Discount: ${selectedOrder.discount}
Branch: ${selectedOrder.branch}
Branch Phone: ${selectedOrder.branchPhone}
Location: ${selectedOrder.location}

🛒 Order Items:
${selectedOrder.items.map(item => `${item.name} × ${item.quantity} = ${(item.price * item.quantity).toFixed(2)} SAR`).join('\n')}

💰 Total Amount: ${selectedOrder.total.toFixed(2)} SAR

    `.trim();

    navigator.clipboard.writeText(orderText).then(() => {
        showNotification('Order details copied successfully!');
    }).catch(() => {
        showNotification('Failed to copy details', 'error');
    });
}

// Save order card English
function saveOrderCardEn() {
    if (!selectedOrder) return;

    const orderData = {
        ...selectedOrder,
        savedAt: new Date().toISOString()
    };

    // Save to localStorage (mock implementation)
    const savedOrders = JSON.parse(localStorage.getItem('savedOrders') || '[]');
    savedOrders.push(orderData);
    localStorage.setItem('savedOrders', JSON.stringify(savedOrders));

    showNotification('Order card saved successfully!');
}

// Refund order
function refundOrder() {
    if (!selectedOrder) return;

    const confirmRefund = confirm(`هل أنت متأكد من استرداد الطلب #${selectedOrder.id}؟\nالمبلغ: ${selectedOrder.total.toFixed(2)} ريال`);

    if (confirmRefund) {
        // Update order status to refunded
        window.open("https://dashboard.moyasar.com/", "_blank");
        
        // selectedOrder.status = 'cancelled';
        // selectedOrder.refunded = true;
        // selectedOrder.refundDate = new Date().toISOString();

        // renderOrders();
        // updateStats();
        // closeModal();
        // showNotification(`تم استرداد الطلب #${selectedOrder.id} بنجاح!`);
    }
}

// Copy cancellation message
function copyCancellationMessage() {
    if (!selectedOrder) return;

    const cancellationMessage = `
عزيزي/عزيزتي ${selectedOrder.customerName},

نأسف لإبلاغك بأنه تم إلغاء طلبك رقم #${selectedOrder.id}.

تفاصيل الطلب:
- وقت الطلب: ${formatTime(selectedOrder.orderTime)} - ${formatDate(selectedOrder.orderTime)}
- المبلغ: ${selectedOrder.total.toFixed(2)} ريال

سيتم إعادة المبلغ إليك خلال 3-5 أيام عمل.

نعتذر عن أي إزعاج وشكراً لتفهمك.

فريق خدمة العملاء
    `.trim();

    navigator.clipboard.writeText(cancellationMessage).then(() => {
        showNotification('تم نسخ رسالة الإلغاء بنجاح!');
    }).catch(() => {
        showNotification('فشل في نسخ رسالة الإلغاء', 'error');
    });
}

// Print order
function printOrder() {
    if (!selectedOrder) return;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>طلب #${selectedOrder.id}</title>
            <style>
                body { font-family: sans-serif; direction: rtl; margin: 20px; }
                .header { text-align: center; margin-bottom: 30px; }
                .section { margin-bottom: 20px; }
                .section h3 { background: #f0f0f0; padding: 10px; margin: 0; }
                .content { padding: 10px; }
                .item { display: flex; justify-content: space-between; border-bottom: 1px solid #eee; padding: 5px 0; }
                .total { font-weight: bold; font-size: 1.2em; text-align: center; margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>🍽️ تفاصيل الطلب</h1>
                <h2>#${selectedOrder.id}</h2>
            </div>
            
            <div class="section">
                <h3>معلومات العميل</h3>
                <div class="content">
                    <p><strong>الاسم:</strong> ${selectedOrder.customerName}</p>
                    <p><strong>الهاتف:</strong> ${selectedOrder.customerPhone}</p>
                </div>
            </div>
            
            <div class="section">
                <h3>معلومات الطلب</h3>
                <div class="content">
                    <p><strong>وقت الطلب:</strong> ${formatTime(selectedOrder.orderTime)} - ${formatDate(selectedOrder.orderTime)}</p>
                    <p><strong>الحالة:</strong> ${getStatusDisplay(selectedOrder.status)}</p>
                    <p><strong>طريقة الدفع:</strong> ${selectedOrder.paymentMethod}</p>
                    <p><strong>الخصم:</strong> ${selectedOrder.discount}</p>
                    <p><strong>الفرع:</strong> ${selectedOrder.branch} (${selectedOrder.branchPhone})</p>
                    <p><strong>الموقع:</strong> ${selectedOrder.location}</p>
                </div>
            </div>
            
            <div class="section">
                <h3>تفاصيل الطلب</h3>
                <div class="content">
                    ${selectedOrder.items.map(item => `
                        <div class="item">
                            <span>${item.name}</span>
                            <span>×${item.quantity}</span>
                            <span>${(item.price * item.quantity).toFixed(2)} ريال</span>
                        </div>
                    `).join('')}
                </div>
            </div>
                        
            <div class="total">
                المجموع الكلي: ${selectedOrder.total.toFixed(2)} ريال
            </div>
        </body>
        </html>
    `);

    printWindow.document.close();
    printWindow.print();
    showNotification('تم إرسال الطلب للطباعة!');
}

// Filter orders
function filterOrders(status) {
    currentFilter = status;
    renderOrders();
}

// Simulate new order arrival
function simulateNewOrder() {
    const newOrder = {
        id: `ORD-${String(orders.length + 1).padStart(3, '0')}`,
        customerName: 'عميل جديد',
        customerPhone: '0501234567',
        discount: 'لا يوجد',
        status: 'new',
        orderTime: new Date().toISOString(),
        items: [
            { name: 'برجر لحم', quantity: 1, price: 30.00 },
            { name: 'بطاطس', quantity: 1, price: 15.00 }
        ],
        total: 45.00,
        paymentMethod: 'بطاقة ائتمان',
        branch: 'كودو الورود',
        branchPhone: '0572519542',
        location: 'https://maps.app.goo.gl/jJC212zgf1nwy67a6',
        estimatedTime: '20 دقيقة'
    };

    orders.unshift(newOrder);
    renderOrders();
    updateStats();
    playNotificationSound();
    showNotification(`طلب جديد! #${newOrder.id}`);
}

// Update last update time
function updateLastUpdateTime() {
    const now = new Date();
    document.getElementById('lastUpdate').textContent =
        now.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
}

// Initialize
function init() {
    // Event listeners
    document.getElementById('audioToggle').addEventListener('click', toggleAudio);

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => filterOrders(btn.dataset.status));
    });

    // Close modal when clicking outside
    document.getElementById('orderModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('orderModal')) {
            closeModal();
        }
    });

    // Initial render
    renderOrders();
    updateStats();
    updateLastUpdateTime();

    // Update time every minute
    setInterval(updateLastUpdateTime, 60000);

    // Simulate new orders every 30 seconds (for demo)
    setInterval(simulateNewOrder, 30000);
}

// Start the application
init();