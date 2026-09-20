/**
 * ==========================================================================
 * TUTORCODE PLATFORM - MATHEMATICS FOR IT MODULE (math_it.js)
 * Course 06016401: Mathematics for Information Technology
 * 7 In-Depth Lessons + 5 Mathematical & AI Computing Challenges
 * ==========================================================================
 */
const MathItData = {
  lessons: [
    {
      id: 'math_it-1',
      lang: 'math_it',
      chapter: 1,
      title: "บทที่ 1: ลิมิตและอัตราการเปลี่ยนแปลงในวิทยาการคอมพิวเตอร์ (Limits & Rate of Change)",
      subtitle: "แนวคิดพื้นฐานของแคลคูลัส: จากอัตราเฉลี่ยสู่อัตราการเปลี่ยนแปลงขณะใดขณะหนึ่ง",
      xpReward: 70,
      explanation: `
      <h4>ยินดีต้อนรับสู่วิชา 06016401 คณิตศาสตร์สำหรับเทคโนโลยีสารสนเทศ</h4>
      <p>แคลคูลัส (Calculus) ไม่ใช่แค่เรื่องสูตรบนกระดาษ แต่คือ <strong>"ภาษาของการเปลี่ยนแปลง (Language of Change)"</strong> ที่เป็นรากฐานของ Computer Graphics, ฟิสิกส์ใน Game Engine และ Machine Learning</p>

      <h5>1. นิยามของลิมิต (Limit):</h5>
      <p>$$\lim_{x \to a} f(x) = L$$</p>
      <p>หมายความว่า เมื่อตัวแปร $x$ มีค่าเข้าใกล้ $a$ มากๆ (แต่ไม่จำเป็นต้องเท่ากับ $a$) ค่าของฟังก์ชัน $f(x)$ จะมีค่าลู่เข้าสู่ค่าคงที่ $L$</p>

      <h5>2. อัตราการเปลี่ยนแปลงเฉลี่ย vs ขณะใดขณะหนึ่ง:</h5>
      <ul>
        <li><strong>อัตราการเปลี่ยนแปลงเฉลี่ย (Average Rate):</strong> วัดความชันระหว่าง 2 จุดห่างกัน
          $$\frac{\Delta y}{\Delta x} = \frac{f(x_2) - f(x_1)}{x_2 - x_1}$$
        </li>
        <li><strong>อัตราการเปลี่ยนแปลงขณะใดขณะหนึ่ง (Instantaneous Rate):</strong> เมื่อระยะห่าง $h \to 0$
          $$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$$
        </li>
      </ul>

      <h5>3. การประมาณค่าเชิงตัวเลขในคอมพิวเตอร์ (Finite Difference Method):</h5>
      <p>ในคอมพิวเตอร์ เราไม่สามารถกำหนด $h = 0$ ได้ตรงๆ เพราะจะเกิด <code>ZeroDivisionError</code> เราจึงใช้ค่า $h$ ที่เล็กมากๆ เช่น $h = 10^{-5} = 0.00001$ เพื่อคำนวณความชัน!</p>
    `,
      exampleCode: `# ตัวอย่างการประมาณค่าอนุพันธ์เชิงตัวเลขของ f(x) = x^2 + 4x ที่จุด x = 3
def f(x):
    return x**2 + 4*x

x = 3
h = 0.00001
instant_rate = (f(x + h) - f(x)) / h

print("Instant Rate:", round(instant_rate))`,
      starterCode: `# จงคำนวณหาอัตราการเปลี่ยนแปลงขณะใดขณะหนึ่งของ f(x) = x^2 + 4x ที่จุด x = 3
# โดยใช้สูตร Finite Difference: (f(x + h) - f(x)) / h เมื่อ h = 0.00001
# แล้วแสดงผลด้วย print("Instant Rate:", round(instant_rate))

def f(x):
    return x**2 + 4*x

x = 3
h = 0.00001
instant_rate = (f(x + h) - f(x)) / h

print("Instant Rate:", round(instant_rate))
`,
      practiceTask: `คำนวณหาอัตราการเปลี่ยนแปลงขณะใดขณะหนึ่งของฟังก์ชัน <code>f(x) = x**2 + 4*x</code> ณ จุด <code>x = 3</code> ด้วย <code>h = 0.00001</code> แล้วสั่ง <code>print("Instant Rate:", round(instant_rate))</code>`,
      expectedOutput: "Instant Rate: 10",
      validator: (output) => output.trim().includes('Instant Rate: 10')
    },
    {
      id: 'math_it-2',
      lang: 'math_it',
      chapter: 2,
      title: "บทที่ 2: อนุพันธ์และความชันของฟังก์ชัน (Derivatives & Tangent Slopes)",
      subtitle: "Power Rule, Geometric Interpretation และความหมายของการปรับปรุงระบบ",
      xpReward: 75,
      explanation: `
      <h4>อนุพันธ์ (Derivative) และความชันของเส้นสัมผัส</h4>
      <p>อนุพันธ์ของฟังก์ชัน $f(x)$ ณ จุด $x$ ใดๆ เขียนแทนด้วยสัญลักษณ์ $f'(x)$ หรือ $\frac{df}{dx}$ คือ <strong>"ความชัน (Slope) ของเส้นสัมผัสกราฟ ณ จุดนั้น"</strong></p>

      <h5>1. กฎอนุพันธ์พื้นฐาน (Differentiation Rules):</h5>
      <ul>
        <li><strong>กฎค่าคงที่ (Constant Rule):</strong> $\frac{d}{dx}[c] = 0$ (ค่าคงที่ไม่เปลี่ยนแปลง ความชันจึงเป็น 0)</li>
        <li><strong>กฎเลขยกกำลัง (Power Rule):</strong> $\frac{d}{dx}[x^n] = n \cdot x^{n-1}$</li>
        <li><strong>กฎผลคูณค่าคงที่:</strong> $\frac{d}{dx}[c \cdot f(x)] = c \cdot f'(x)$</li>
        <li><strong>กฎผลบวก/ผลลบ:</strong> $\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)$</li>
      </ul>

      <h5>2. ตัวอย่างการหาอนุพันธ์ทางพีชคณิต:</h5>
      <p>ถ้าฟังก์ชันต้นทุนความผิดพลาด (Cost Function) คือ $L(w) = 3w^2 - 12w + 5$</p>
      <p>อนุพันธ์คือ $L'(w) = \frac{d}{dw}[3w^2] - \frac{d}{dw}[12w] + \frac{d}{dw}[5] = 6w - 12$</p>
      <p>ที่จุด $w = 5$ ความชันของเส้นสัมผัสคือ $L'(5) = 6(5) - 12 = 30 - 12 = 18$</p>
    `,
      exampleCode: `# คำนวณความชันของเส้นสัมผัส L(w) = 3w^2 - 12w + 5
def derivative_L(w):
    return 6 * w - 12

w = 5
slope = derivative_L(w)
print("Slope at w=5:", slope)`,
      starterCode: `# จงเขียนฟังก์ชัน derivative_L(w) คืนค่าอนุพันธ์ 6*w - 12
# จากนั้นคำนวณหาความชันที่จุด w = 5
# แล้วแสดงผลด้วย print("Slope at w=5:", slope)

def derivative_L(w):
    return 6 * w - 12

w = 5
slope = derivative_L(w)
print("Slope at w=5:", slope)
`,
      practiceTask: `คำนวณหาความชันของอนุพันธ์ $L'(w) = 6w - 12$ ที่จุด $w = 5$ แล้วแสดงผล <code>print("Slope at w=5:", slope)</code>`,
      expectedOutput: "Slope at w=5: 18",
      validator: (output) => output.trim().includes('Slope at w=5: 18')
    },
    {
      id: 'math_it-3',
      lang: 'math_it',
      chapter: 3,
      title: "บทที่ 3: กฎลูกโซ่และกราฟการคำนวณ (The Chain Rule & Computational Graphs)",
      subtitle: "อนุพันธ์ของฟังก์ชันประกอบ (Composite Functions) และหัวใจของ Backpropagation",
      xpReward: 80,
      explanation: `
      <h4>กฎลูกโซ่ (The Chain Rule) กับโมเดลปัญญาประดิษฐ์</h4>
      <p>ในโครงข่ายประสาทเทียม (Neural Networks) โมเดลเกิดจากการนำเลเยอร์ (Layer) หลายชั้นมาต่อกันเป็นฟังก์ชันซ้อนฟังก์ชัน $y = f(g(h(x)))$</p>

      <h5>1. สูตรกฎลูกโซ่ (Chain Rule):</h5>
      <p>ถ้า $y = f(u)$ และ $u = g(x)$ แล้ว:</p>
      <p>$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$</p>

      <h5>2. กราฟการคำนวณ (Computational Graph):</h5>
      <ul>
        <li><strong>Forward Pass:</strong> คำนวณจาก Input $x \to u = g(x) \to y = f(u)$ เพื่อหาผลลัพธ์พยากรณ์</li>
        <li><strong>Backward Pass (Backpropagation):</strong> คำนวณ Gradient ย้อนกลับจาก Output มาหา Input โดยคูณความชันสะสมของแต่ละจุดเชื่อมต่อตามกฎลูกโซ่!</li>
      </ul>

      <h5>3. ตัวอย่างการคำนวณ:</h5>
      <p>กำหนดให้ $y = (2x + 5)^3$ จงหา $\frac{dy}{dx}$ ที่ $x = 1$</p>
      <ol>
        <li>กำหนดฟังก์ชันชั้นใน: $u = 2x + 5 \implies \frac{du}{dx} = 2$</li>
        <li>ฟังก์ชันชั้นนอก: $y = u^3 \implies \frac{dy}{du} = 3u^2$</li>
        <li>ตามกฎลูกโซ่: $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = 3u^2 \cdot 2 = 6(2x + 5)^2$</li>
        <li>ที่จุด $x = 1$: $6(2(1) + 5)^2 = 6(7)^2 = 6 \times 49 = 294$</li>
      </ol>
    `,
      exampleCode: `# คำนวณอนุพันธ์ของ y = (2x + 5)^3 ด้วยกฎลูกโซ่
x = 1
u = 2 * x + 5
dy_du = 3 * (u ** 2)
du_dx = 2
result = dy_du * du_dx

print("Chain Rule dy/dx:", result)`,
      starterCode: `# จงคำนวณหาอนุพันธ์ dy/dx ของ y = (2x + 5)^3 ที่จุด x = 1 โดยใช้กฎลูกโซ่
# dy_du = 3 * (u ** 2)
# du_dx = 2
# result = dy_du * du_dx
# แล้วแสดงผลด้วย print("Chain Rule dy/dx:", result)

x = 1
u = 2 * x + 5
dy_du = 3 * (u ** 2)
du_dx = 2
result = dy_du * du_dx

print("Chain Rule dy/dx:", result)
`,
      practiceTask: `คำนวณหาอนุพันธ์ตามกฎลูกโซ่ของ $y = (2x + 5)^3$ ณ จุด $x = 1$ แล้วแสดงผล <code>print("Chain Rule dy/dx:", result)</code>`,
      expectedOutput: "Chain Rule dy/dx: 294",
      validator: (output) => output.trim().includes('Chain Rule dy/dx: 294')
    },
    {
      id: 'math_it-4',
      lang: 'math_it',
      chapter: 4,
      title: "บทที่ 4: การหาค่าเหมาะสมที่สุดและเกรเดียนต์เดสเซนต์ (Optimization & Gradient Descent)",
      subtitle: "อัลกอริทึมอมตะของ AI: ค้นหาค่าน้ำหนักที่ทำให้ Loss ต่ำที่สุดทีละก้าว",
      xpReward: 85,
      explanation: `
      <h4>Optimization & Gradient Descent: หัวใจของ Machine Learning</h4>
      <p>ในระบบ AI งานของเราคือการทำให้ฟังก์ชันความผิดพลาด (Loss Function) มีค่าน้อยที่สุดเท่าที่จะเป็นไปได้ โดยปรับค่าน้ำหนัก (Weights) ของโมเดล</p>

      <h5>1. กลไกการเดินลงเขา (Gradient Descent Algorithm):</h5>
      <p>ความชัน (Gradient) จะชี้ไปในทิศทางที่ฟังก์ชัน "เพิ่มขึ้นชันที่สุด" เสมอ ดังนั้นหากเราต้องการ "ลดค่าฟังก์ชันลง" เราจึงต้องก้าวเดินไปใน <strong>ทิศทางตรงกันข้ามกับความชัน (Negative Gradient)</strong></p>

      <h5>2. กฎการปรับค่าน้ำหนัก (Update Rule):</h5>
      <p>$$w_{new} = w_{old} - \alpha \cdot f'(w_{old})$$</p>
      <ul>
        <li>$\alpha$ (Alpha): คือ <strong>Learning Rate</strong> หรืออัตราการเรียนรู้ เป็นตัวกำหนดขนาดความยาวของแต่ละก้าวที่เดิน</li>
        <li>$f'(w)$: คือความชัน ณ จุดปัจจุบัน</li>
      </ul>

      <h5>3. การคำนวณทีละก้าวสำหรับ $f(w) = w^2$ ($f'(w) = 2w$):</h5>
      <p>เริ่มต้นจาก $w_0 = 8.0$ กำหนด $\alpha = 0.2$</p>
      <ul>
        <li>รอบที่ 1: $w_1 = 8.0 - 0.2(2 \times 8.0) = 8.0 - 3.2 = 4.8$</li>
        <li>รอบที่ 2: $w_2 = 4.8 - 0.2(2 \times 4.8) = 4.8 - 1.92 = 2.88$</li>
        <li>รอบที่ 3: $w_3 = 2.88 - 0.2(2 \times 2.88) = 2.88 - 1.152 = 1.728$</li>
      </ul>
    `,
      exampleCode: `# จำลองอัลกอริทึม Gradient Descent 3 รอบ
w = 8.0
alpha = 0.2

for i in range(3):
    gradient = 2 * w
    w = w - alpha * gradient

print("Optimized w:", round(w, 4))`,
      starterCode: `# กำหนดจุดเริ่มต้น w = 8.0 และ learning rate alpha = 0.2
# วนลูป 3 รอบ อัปเดต w = w - alpha * (2 * w)
# แล้วแสดงผลด้วย print("Optimized w:", round(w, 4))

w = 8.0
alpha = 0.2

for i in range(3):
    gradient = 2 * w
    w = w - alpha * gradient

print("Optimized w:", round(w, 4))
`,
      practiceTask: `จำลองการรัน Gradient Descent 3 รอบบนฟังก์ชัน $f(w) = w^2$ จาก $w = 8.0, \alpha = 0.2$ แล้วสั่ง <code>print("Optimized w:", round(w, 4))</code>`,
      expectedOutput: "Optimized w: 1.728",
      validator: (output) => output.trim().includes('Optimized w: 1.728')
    },
    {
      id: 'math_it-5',
      lang: 'math_it',
      chapter: 5,
      title: "บทที่ 5: เวกเตอร์และสเปซเวกเตอร์ในทางคอมพิวเตอร์ (Vectors & Vector Spaces)",
      subtitle: "การแทนข้อมูลหลายมิติ (Embeddings), เวกเตอร์ 1D/nD และ Euclidean Norm",
      xpReward: 90,
      explanation: `
      <h4>เวกเตอร์ในมุมมองของ Computer Science</h4>
      <p>ในวิชาฟิสิกส์ เวกเตอร์คือลูกศรที่มีขนาดและทิศทาง แต่ใน <strong>วิศวกรรมข้อมูลและไอที เวกเตอร์คือ List ของตัวเลขที่มีลำดับ (Ordered List of Numbers)</strong></p>

      <h5>1. ตัวอย่างเวกเตอร์ในระบบคอมพิวเตอร์จริง:</h5>
      <ul>
        <li><strong>Pixel Color (3D):</strong> <code>[R, G, B]</code> เช่น <code>[255, 128, 0]</code></li>
        <li><strong>3D Game Position:</strong> <code>[x, y, z]</code> ตำแหน่งพิกัดตัวละครในแผนที่</li>
        <li><strong>User Profile Vector:</strong> <code>[อายุ, รายได้, คะแนนความสนใจ]</code></li>
        <li><strong>Text Embedding (NLP/LLM):</strong> ตัวแทนความหมายของข้อความในมิติสูง เช่น 1536 มิติ</li>
      </ul>

      <h5>2. ขนาดของเวกเตอร์ (Euclidean Norm / $L_2$ Magnitude):</h5>
      <p>ขนาดหรือความยาวของเวกเตอร์ $\vec{v} = [v_1, v_2]$ คำนวณได้จากทฤษฎีบทพีทาโกรัส:</p>
      <p>$$\|\vec{v}\| = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}$$</p>
      <p>เช่น เวกเตอร์ $\vec{v} = [6, 8]$ จะมีขนาด $\|\vec{v}\| = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10$</p>
    `,
      exampleCode: `import math

# คำนวณขนาด (Magnitude) ของเวกเตอร์ v = [6, 8]
v = [6, 8]
mag = math.sqrt(v[0]**2 + v[1]**2)

print("Magnitude:", int(mag))`,
      starterCode: `import math

# กำหนดเวกเตอร์ v = [6, 8]
# จงคำนวณหาขนาดเวกเตอร์ mag = math.sqrt(v[0]**2 + v[1]**2)
# แล้วแสดงผลด้วย print("Magnitude:", int(mag))

v = [6, 8]
mag = math.sqrt(v[0]**2 + v[1]**2)

print("Magnitude:", int(mag))
`,
      practiceTask: `นำเข้าไลบรารี <code>math</code> และคำนวณขนาดเวกเตอร์ <code>v = [6, 8]</code> ด้วย <code>math.sqrt()</code> แล้วสั่ง <code>print("Magnitude:", int(mag))</code>`,
      expectedOutput: "Magnitude: 10",
      validator: (output) => output.trim().includes('Magnitude: 10')
    },
    {
      id: 'math_it-6',
      lang: 'math_it',
      chapter: 6,
      title: "บทที่ 6: ผลคูณเชิงสเกลาร์และความคล้ายคลึงโคไซน์ (Dot Product & Cosine Similarity)",
      subtitle: "Dot Product, มุมระหว่างเวกเตอร์ และการประยุกต์ใน Search Engine & Recommendation Systems",
      xpReward: 95,
      explanation: `
      <h4>ผลคูณเชิงสเกลาร์ (Dot Product) และความคล้ายคลึงเชิงความหมาย</h4>
      <p>Dot Product เป็นการกระทำทางพีชคณิตเชิงเส้นที่สำคัญที่สุดในระบบ AI และ Search Engine</p>

      <h5>1. นิยามทางพีชคณิต (Algebraic Definition):</h5>
      <p>ผลคูณของสมาชิกแต่ละตำแหน่งแล้วนำมารวมกัน:</p>
      <p>$$\vec{u} \cdot \vec{v} = u_1 v_1 + u_2 v_2 + \dots + u_n v_n$$</p>

      <h5>2. ความหมายทางเรขาคณิต (Geometric Definition):</h5>
      <p>$$\vec{u} \cdot \vec{v} = \|\vec{u}\| \cdot \|\vec{v}\| \cdot \cos(\theta)$$</p>
      <ul>
        <li>ถ้า Dot Product เป็นบวก: เวกเตอร์ทั้งสองชี้ไปในทิศทางใกล้เคียงกัน (ความหมายคล้ายกัน)</li>
        <li>ถ้า Dot Product เป็น 0: เวกเตอร์ตั้งฉากกัน 90 องศา (Orthogonal) บ่งบอกว่าไม่มีความเกี่ยวข้องกัน</li>
        <li>ถ้า Dot Product เป็นลบ: เวกเตอร์ชี้ไปในทิศทางตรงข้ามกันอย่างสิ้นเชิง</li>
      </ul>

      <h5>3. Cosine Similarity ในระบบค้นหา (Search Engine):</h5>
      <p>$$\text{Cosine Similarity} = \frac{\vec{u} \cdot \vec{v}}{\|\vec{u}\| \|\vec{v}\|}$$</p>
      <p>ใช้เปรียบเทียบว่าคำค้นหา (Query) ของผู้ใช้ใกล้เคียงกับเอกสาร (Document) ใดมากที่สุดใน Vector Database</p>
    `,
      exampleCode: `# การคำนวณ Dot Product ของ u = [1, 3, -5] และ v = [4, -2, -1]
u = [1, 3, -5]
v = [4, -2, -1]

dot_product = u[0]*v[0] + u[1]*v[1] + u[2]*v[2]
print("Dot Product:", dot_product)`,
      starterCode: `# จงคำนวณ Dot Product ระหว่างเวกเตอร์ u = [1, 3, -5] และ v = [4, -2, -1]
# dot_product = (u[0]*v[0]) + (u[1]*v[1]) + (u[2]*v[2])
# แล้วแสดงผลด้วย print("Dot Product:", dot_product)

u = [1, 3, -5]
v = [4, -2, -1]

dot_product = u[0]*v[0] + u[1]*v[1] + u[2]*v[2]
print("Dot Product:", dot_product)
`,
      practiceTask: `คำนวณหา Dot Product ของเวกเตอร์ <code>u = [1, 3, -5]</code> และ <code>v = [4, -2, -1]</code> แล้วสั่ง <code>print("Dot Product:", dot_product)</code>`,
      expectedOutput: "Dot Product: 3",
      validator: (output) => output.trim().includes('Dot Product: 3')
    },
    {
      id: 'math_it-7',
      lang: 'math_it',
      chapter: 7,
      title: "บทที่ 7: เมทริกซ์และการแปลงพิกัด 2D (Matrices & 2D Transformations)",
      subtitle: "Matrix Multiplication, Scaling, Rotation และการประยุกต์ใน Computer Graphics",
      xpReward: 100,
      explanation: `
      <h4>เมทริกซ์ (Matrix) กับกราฟิกส์คอมพิวเตอร์</h4>
      <p>ใน Computer Graphics และ Game Development ภาพ 2D และ 3D ทุกรูปสร้างขึ้นจากจุดยอด (Vertices) ที่ถูกเคลื่อนย้าย ย่อ/ขยาย และหมุน ด้วยการคูณเมทริกซ์ (Matrix Transformation)</p>

      <h5>1. การคูณเมทริกซ์ 2x2 กับเวกเตอร์พิกัด 2D:</h5>
      <p>$$\begin{bmatrix} a & b \\ c & d \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} ax + by \\ cx + dy \end{bmatrix}$$</p>

      <h5>2. เมทริกซ์แปลงพิกัดมาตรฐาน (Standard 2D Transformations):</h5>
      <ul>
        <li><strong>Scaling Matrix (ย่อ/ขยาย):</strong>
          $$\begin{bmatrix} s_x & 0 \\ 0 & s_y \end{bmatrix}$$
          ทำให้พิกัดใหม่เป็น $x' = s_x \cdot x$ และ $y' = s_y \cdot y$
        </li>
        <li><strong>Rotation Matrix (หมุนรอบจุดกำเนิด):</strong>
          $$\begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}$$
        </li>
      </ul>

      <h5>3. ตัวอย่างการแปลงพิกัด:</h5>
      <p>นำจุดพิกัด $P = [3, 4]$ มาขยายด้วย Scaling Matrix $S = \begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix}$</p>
      <p>จะได้พิกัดใหม่: $x' = (2)(3) + (0)(4) = 6$ และ $y' = (0)(3) + (3)(4) = 12$</p>
    `,
      exampleCode: `# การคูณ Scaling Matrix กับจุดพิกัด P = [3, 4]
point = [3, 4]
scale_matrix = [
    [2, 0],
    [0, 3]
]

x_prime = scale_matrix[0][0] * point[0] + scale_matrix[0][1] * point[1]
y_prime = scale_matrix[1][0] * point[0] + scale_matrix[1][1] * point[1]

print("Transformed Point:", [x_prime, y_prime])`,
      starterCode: `# กำหนดจุด point = [3, 4] และ Matrix ขยาย scale_matrix = [[2, 0], [0, 3]]
# คำนวณหาพิกัดใหม่ x_prime และ y_prime
# แล้วแสดงผลด้วย print("Transformed Point:", [x_prime, y_prime])

point = [3, 4]
scale_matrix = [
    [2, 0],
    [0, 3]
]

x_prime = scale_matrix[0][0] * point[0] + scale_matrix[0][1] * point[1]
y_prime = scale_matrix[1][0] * point[0] + scale_matrix[1][1] * point[1]

print("Transformed Point:", [x_prime, y_prime])
`,
      practiceTask: `คำนวณการแปลงจุดพิกัด <code>point = [3, 4]</code> ด้วยเมทริกซ์ <code>[[2, 0], [0, 3]]</code> แล้วแสดงผล <code>print("Transformed Point:", [x_prime, y_prime])</code>`,
      expectedOutput: "Transformed Point: [6, 12]",
      validator: (output) => output.trim().includes('Transformed Point: [6, 12]')
    }
  ],

  challenges: [
    {
      id: 'chal-math-1',
      lang: 'math_it',
      difficulty: 'medium',
      title: "คำนวณอนุพันธ์เชิงตัวเลข (Numerical Derivative of f(x) = x^3)",
      desc: "เขียนฟังก์ชัน compute_derivative(x) เพื่อหาอนุพันธ์ของ f(x) = x^3 ที่จุด x โดยใช้ finite difference h = 1e-5 แล้วปัดเศษ 2 ตำแหน่ง",
      sampleInput: "compute_derivative(2.0)",
      sampleOutput: "12.0",
      xpReward: 120,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "ใช้สูตร (f(x + h) - f(x)) / h โดย f(x) = x**3"
        }
],
      starterCode: `def compute_derivative(x):
    h = 0.00001
    f_x = x ** 3
    f_xh = (x + h) ** 3
    return round((f_xh - f_x) / h, 2)

print(compute_derivative(2.0))
`,
      testCases: [
        {
                "input": [],
                "expected": "12"
        }
]
    },
    {
      id: 'chal-math-2',
      lang: 'math_it',
      difficulty: 'medium',
      title: "ความคล้ายคลึงโคไซน์ของเอกสาร (Vector Cosine Similarity)",
      desc: "เขียนฟังก์ชัน cosine_similarity(u, v) หาความคล้ายคลึงระหว่างเวกเตอร์ 2 มิติ u และ v คืนค่าทศนิยม 2 ตำแหน่ง",
      sampleInput: "cosine_similarity([3, 4], [3, 4])",
      sampleOutput: "1.0",
      xpReward: 140,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "สูตรคือ dot_product / (norm_u * norm_v)"
        }
],
      starterCode: `import math

def cosine_similarity(u, v):
    dot = u[0]*v[0] + u[1]*v[1]
    norm_u = math.sqrt(u[0]**2 + u[1]**2)
    norm_v = math.sqrt(v[0]**2 + v[1]**2)
    return round(dot / (norm_u * norm_v), 2)

print("Cosine:", cosine_similarity([3, 4], [3, 4]))
`,
      testCases: [
        {
                "input": [],
                "expected": "Cosine: 1"
        }
]
    },
    {
      id: 'chal-math-3',
      lang: 'math_it',
      difficulty: 'hard',
      title: "การหมุนจุด 2D ด้วยเมทริกซ์การหมุน (2D Rotation Matrix)",
      desc: "เขียนฟังก์ชัน rotate_point(x, y, degrees) เพื่อหมุนจุด (x,y) รอบจุดกำเนิดตามมุมองศาที่กำหนด ปัดเศษจำนวนเต็ม",
      sampleInput: "rotate_point(10, 0, 90)",
      sampleOutput: "[0, 10]",
      xpReward: 160,
      hints: [
        {
                "tier": 1,
                "cost": 15,
                "text": "rad = degrees * (math.pi / 180)"
        }
],
      starterCode: `import math

def rotate_point(x, y, degrees):
    rad = degrees * (math.pi / 180)
    x_new = round(x * math.cos(rad) - y * math.sin(rad))
    y_new = round(x * math.sin(rad) + y * math.cos(rad))
    return [int(x_new), int(y_new)]

print("Rotated:", rotate_point(10, 0, 90))
`,
      testCases: [
        {
                "input": [],
                "expected": "Rotated: [0, 10]"
        }
]
    },
    {
      id: 'chal-math-4',
      lang: 'math_it',
      difficulty: 'medium',
      title: "ระยะทางแบบยูคลิดระหว่างจุด 2 จุด (Euclidean Distance)",
      desc: "เขียนฟังก์ชัน euclidean_distance(p1, p2) คำนวณระยะห่างระหว่างจุด 2 มิติ p1=[x1,y1] และ p2=[x2,y2]",
      sampleInput: "euclidean_distance([1, 2], [4, 6])",
      sampleOutput: "5.0",
      xpReward: 120,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "d = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)"
        }
],
      starterCode: `import math

def euclidean_distance(p1, p2):
    d = math.sqrt((p2[0] - p1[0])**2 + (p2[1] - p1[1])**2)
    return round(d, 2)

print("Distance:", euclidean_distance([1, 2], [4, 6]))
`,
      testCases: [
        {
                "input": [],
                "expected": "Distance: 5"
        }
]
    },
    {
      id: 'chal-math-5',
      lang: 'math_it',
      difficulty: 'medium',
      title: "การประมาณค่าจุดต่ำสุดด้วย Gradient Descent (1-Step Update)",
      desc: "ฟังก์ชัน Error Loss L(w) = w^2 (ซึ่งมี Gradient = 2w) เขียนฟังก์ชัน gradient_step(w, lr) เพื่อหาค่า w ใหม่หลังก้าว 1 ก้าว",
      sampleInput: "gradient_step(5.0, 0.1)",
      sampleOutput: "4.0",
      xpReward: 130,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "สูตรอัปเดตคือ w_new = w - lr * (2 * w)"
        }
],
      starterCode: `def gradient_step(w, lr):
    grad = 2 * w
    w_new = w - lr * grad
    return round(w_new, 3)

print("Next w:", gradient_step(5.0, 0.1))
`,
      testCases: [
        {
                "input": [],
                "expected": "Next w: 4"
        }
]
    }
  ]
};

window.MathItData = MathItData;
