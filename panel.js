const CHECKLISTS = {
  'lead-collection': {
    title: 'Lead Collection Kampanyaları – Basic QA Kontrolleri',
    sections: [
      {
        id: 'design',
        title: '1. Tasarım Uyumu (Design Compliance)',
        items: [
          {
            id: 'design-spec-compare',
            label:
              'Desktop, mobile ve tablet’te font, layout, spacing, alignment, background image ve element yerleşimini Quip/Figma spec’leriyle karşılaştır.'
          },
          {
            id: 'design-responsive',
            label:
              'Responsive davranışların (özellikle iOS / Android) düzgün çalıştığını kontrol et.'
          }
        ]
      },
      {
        id: 'form-submission',
        title: '2. Form Gönderimi (Lead Submission)',
        items: [
          {
            id: 'form-valid-request',
            label:
              'Geçerli verilerle formu gönder, network tab’de lead_collected isteğinin geldiğini doğrula.'
          },
          {
            id: 'form-required-validation',
            label:
              'Zorunlu alanlar boşken formun gönderilemediğini ve gerekli uyarıların çıktığını kontrol et (validation).'
          },
          {
            id: 'form-invalid-scenarios',
            label:
              'Farklı invalid senaryoları test et (yanlış email formatı, eksik alan vb.).'
          },
          {
            id: 'form-data-persist',
            label:
              'Verinin UCD / UCP / CRM tarafına doğru kaydedildiğini ve istatistik / log’lara yansıdığını doğrula.'
          }
        ]
      },
      {
        id: 'triggering-logic',
        title: '3. Tetikleme Mantığı (Triggering Logic)',
        items: [
          {
            id: 'trigger-main-scenarios',
            label:
              'Purchase completion, payment page vb. hedef sayfalarda tetiklenme koşullarını test et.'
          },
          {
            id: 'trigger-user-attributes',
            label:
              'email_opt_in gibi user attribute’ları UCD Helper / Insider Helper ile kontrol et.'
          },
          {
            id: 'trigger-utm',
            label:
              'UTM parametrelerinin (örn. utm_medium=email) kampanyada görünmediğini veya gizlendiğini kontrol et.'
          },
          {
            id: 'trigger-wrong-targeting',
            label:
              'Yanlış targeting olmadığından emin ol (örn. email_opt_in = true kullanıcılarında lead kampanyası görünmemeli).'
          }
        ]
      },
      {
        id: 'thank-you',
        title: '4. Thank You Ekranı ve Linkler',
        items: [
          {
            id: 'thankyou-visual',
            label:
              'Form sonrası görünen thank you mesajının tasarım ve içerik açısından doğru olduğunu kontrol et.'
          },
          {
            id: 'thankyou-autoclose',
            label:
              'Thank you ekranının otomatik kapanmadığını (gereksiz auto-close olmadığını) doğrula.'
          },
          {
            id: 'thankyou-links',
            label:
              'T&C / Privacy Policy linklerinin desktop ve mobile’da doğru sayfalara yönlendirdiğini test et.'
          }
        ]
      },
      {
        id: 'dynamic-data',
        title: '5. Dinamik Veri ve Validasyon',
        items: [
          {
            id: 'dynamic-fields',
            label:
              'Kullanıcı adı, email, doğum tarihi vb. dinamik alanların kaynaktan (I/O vb.) doğru çekildiğini doğrula.'
          },
          {
            id: 'date-validation',
            label:
              'Tarih alanlarında geçersiz tarihlerin (örn. 30/31 Feb) seçilemediğini ve leap year senaryolarının doğru çalıştığını test et.'
          },
          {
            id: 'ucd-attributes-update',
            label:
              'UCD attributes (gender, birthday, GDPR, opt-ins vb.) submit sonrası doğru güncellendiğini kontrol et.'
          }
        ]
      },
      {
        id: 'export-analytics',
        title: '6. Veri Export ve Analytics',
        items: [
          {
            id: 'crm-export-format',
            label:
              'CRM export formatını kontrol et (tarih formatı, gün/ay/yıl sütunları, gerekli yerlerde “01” vb.).'
          },
          {
            id: 'variant-id',
            label: 'variant_id gibi kritik alanların null olmadığını doğrula.'
          },
          {
            id: 'lead-collected-logs',
            label:
              'lead_collected event’inin log’larda ve raporlarda göründüğünü kontrol et.'
          },
          {
            id: 'negative-cases',
            label:
              'Negatif senaryoları test et: boş alanlar, geçersiz email/date, bot benzeri tıklamalar (user_agent kontrolleri).'
          }
        ]
      }
    ]
  },

  'recommender': {
    title: 'Recommender Kampanyaları (Smart Recommender / Eureka)',
    sections: [
      {
        id: 'rec-visibility',
        title: '1. Visibility ve Tetikleme',
        items: [
          {
            id: 'rec-page-types',
            label:
              'PDP, cart vb. farklı page type’larda system rules (örn. getCurrentProduct, isOnMainPage) doğru çalışıyor mu kontrol et.'
          },
          {
            id: 'rec-feed-network',
            label:
              'Network tab’de feed içeriğinin (product catalog / clickstream) beklenen ürünleri döndürdüğünü doğrula.'
          }
        ]
      },
      {
        id: 'rec-design',
        title: '2. Tasarım ve Ürünler',
        items: [
          {
            id: 'rec-design-spec',
            label:
              'Desktop, mobile ve tablet’te font, layout, spacing ve genel görünümü spec ile karşılaştır.'
          },
          {
            id: 'rec-products-correct',
            label:
              'Her varyantta gösterilen ürünlerin filtre, segment ve kategoriye göre doğru listelendiğini kontrol et.'
          }
        ]
      },
      {
        id: 'rec-atc',
        title: '3. Add to Cart ve Events',
        items: [
          {
            id: 'rec-atc-event',
            label:
              'Recommender içerisinden Add to Cart aksiyonunu test et, network tab’de ilgili item_added_to_cart / benzeri event’in geldiğini doğrula.'
          },
          {
            id: 'rec-referred-products',
            label:
              'ins-referred-products gibi localStorage / storage alanlarına doğru verinin yazıldığını kontrol et.'
          },
          {
            id: 'rec-default-goals',
            label:
              'Default goals (imp, viewable_imp, join, atc, sales) doğru şekilde tetikleniyor mu kontrol et.'
          }
        ]
      },
      {
        id: 'rec-analytics',
        title: '4. Analytics',
        items: [
          {
            id: 'rec-analytics-pages',
            label:
              'Campaign Analytics ve Eureka Analytics ekranlarını önce/sonra ekran görüntüleriyle karşılaştır.'
          },
          {
            id: 'rec-metrics',
            label:
              'Direct / assisted / incremental revenue ve product hits gibi metriklerin beklenen değişimi gösterdiğini doğrula (gerekirse Athena query ile).'
          }
        ]
      },
      {
        id: 'rec-feed-catalog',
        title: '5. Feed ve Catalog',
        items: [
          {
            id: 'rec-catalog-sync',
            label:
              'Product catalog senkronizasyonunu kontrol et (in-stock / out-of-stock, fiyat, stok vb.).'
          },
          {
            id: 'rec-api-response',
            label:
              'API response’larının beklenen format ve veri yapısında olduğunu doğrula.'
          }
        ]
      }
    ]
  },

  'custom': {
    title: 'Custom Kampanyalar – Basic QA Kontrolleri',
    sections: [
      {
        id: 'custom-visibility',
        title: '1. Visibility ve Kurallar',
        items: [
          {
            id: 'custom-rules-step',
            label:
              'Custom rule ve segment mantığını adım adım test et; farklı user senaryolarında kampanyanın doğru kullanıcıya göründüğünü kontrol et.'
          }
        ]
      },
      {
        id: 'custom-design',
        title: '2. Tasarım ve Fonksiyonellik',
        items: [
          {
            id: 'custom-figma',
            label:
              'Figma spec’lere göre boyutlar, içerik, font ve spacing kontrollerini yap.'
          },
          {
            id: 'custom-actions',
            label:
              'Button / link aksiyonlarını test et (redirect URL’leri, dynamic fields, close behavior vb.).'
          },
          {
            id: 'custom-landscape',
            label:
              'Özellikle mobilde landscape modunda tasarımın bozulmadığını kontrol et.'
          }
        ]
      },
      {
        id: 'custom-events',
        title: '3. Events ve Goals',
        items: [
          {
            id: 'custom-goals',
            label:
              'Tanımlı custom goals (imp, click vb.) network tab’de doğru şekilde tetikleniyor mu kontrol et.'
          },
          {
            id: 'custom-event-payload',
            label:
              'Event isimleri ve payload içeriğinin beklenen formatta olduğunu doğrula.'
          }
        ]
      }
    ]
  },

  'web-templates': {
    title: 'Web Templates – Basic QA Kontrolleri',
    sections: [
      {
        id: 'wt-visibility',
        title: '1. Visibility ve Tetikleme',
        items: [
          {
            id: 'wt-rules-pages',
            label:
              'Kuralların doğru sayfalarda çalıştığını test et (belirli URL’ler, path’ler vb.).'
          },
          {
            id: 'wt-or-and',
            label:
              'OR / AND kullanımını gözden geçir; gereksiz AND ile tetikleme gereğinden fazla daraltılmamış olmalı.'
          },
          {
            id: 'wt-segment-dynamic',
            label:
              'Segment / dynamic rule’ları (email unreachable, opt-in false vb.) kontrollü kullanıcı profilleriyle test et.'
          },
          {
            id: 'wt-cookies-refresh',
            label:
              'Cookies accept + refresh sonrası kampanyanın beklendiği gibi tetiklendiğini kontrol et.'
          },
          {
            id: 'wt-dom-visible',
            label:
              'Kampanyanın DOM’a doğru şekilde append olduğunu ve visible olduğunu; custom rules / on-site experiments ile çakışma olmadığını doğrula.'
          }
        ]
      },
      {
        id: 'wt-design',
        title: '2. Tasarım ve Responsive',
        items: [
          {
            id: 'wt-layout',
            label:
              'Desktop / mobile / tablet’te font, layout, spacing ve boş alanları (blank space) kontrol et.'
          },
          {
            id: 'wt-overlap',
            label:
              'Kampanyanın sayfadaki diğer elementlerle overlap yapmadığını doğrula.'
          },
          {
            id: 'wt-image-quality',
            label:
              'Kullanılan görsellerin yeterli çözünürlükte ve kaliteli olduğunu (bulanık / pixelated olmadığını) kontrol et.'
          },
          {
            id: 'wt-labels-localization',
            label:
              'Labels / placeholders gibi metinleri lokal ihtiyaçlara göre (örn. Türkçe) özelleştirildiğini kontrol et.'
          }
        ]
      },
      {
        id: 'wt-functionality',
        title: '3. Fonksiyonellik ve Linkler',
        items: [
          {
            id: 'wt-legal-links',
            label:
              'T&C / Privacy Policy / KVKK linklerinin tıklanabilir ve doğru sayfalara yönlendirdiğini test et.'
          },
          {
            id: 'wt-app-webview',
            label:
              'Uygulama içi (app / webview) senaryolarda linklerin yanlışlıkla dış tarayıcıya atmadığını kontrol et.'
          },
          {
            id: 'wt-consent-checkbox',
            label:
              'KVKK / ETK gibi consent checkbox’larının zorunlu olup olmadığını ve varsayılan değerlerini kontrol et.'
          },
          {
            id: 'wt-auto-close',
            label:
              'Auto-close / hide sürelerinin (örn. 180s) doğru olduğunu, kampanyanın beklenenden erken kapanmadığını doğrula.'
          },
          {
            id: 'wt-form-flow',
            label:
              'Form varsa submit akışının sorunsuz olduğunu ve hata mesajlarının anlaşılır şekilde gösterildiğini kontrol et.'
          }
        ]
      },
      {
        id: 'wt-form-data',
        title: '4. Form ve Veri (Lead Collection İçeren Templates)',
        items: [
          {
            id: 'wt-email-phone-validation',
            label:
              'Email / telefon alanlarında format validation’ın çalıştığını test et.'
          },
          {
            id: 'wt-profile-update',
            label:
              'Submit sonrası profile update / UCD tarafında email opt-in, GDPR vb. alanların doğru güncellendiğini kontrol et.'
          },
          {
            id: 'wt-vtex-crm',
            label:
              'VTEX / CRM entegrasyonlarında: email’in doğru pre-fill edildiğini, consent checkbox işaretliyse API upsert yapıldığını; işaretli değilse yapılmadığını doğrula.'
          }
        ]
      },
      {
        id: 'wt-events-analytics',
        title: '5. Events ve Analytics',
        items: [
          {
            id: 'wt-events',
            label:
              'imp, click, lead_collected gibi eventlerin network tab’de göründüğünü kontrol et.'
          },
          {
            id: 'wt-reeligibility-priority',
            label:
              'Re-eligibility (örn. session-based, 2 saat kuralı) ve priority order (küçük öncelik değeri önce) mantıklarını test et.'
          }
        ]
      }
    ]
  },

  general: {
    title: 'Genel Tavsiyeler (Tüm Kampanyalar İçin)',
    sections: [
      {
        id: 'general-browsers',
        title: '1. Çoklu Browser / Device',
        items: [
          {
            id: 'general-multi-device',
            label:
              'Chrome, Firefox, Safari, iOS, Android gibi farklı tarayıcı ve cihazlarda temel akışları test et.'
          },
          {
            id: 'general-incognito-stack',
            label:
              'Incognito ve gerekirse BrowserStack kullanarak farklı ortamları simüle et.'
          }
        ]
      },
      {
        id: 'general-variations',
        title: '2. Variations ve Control Gruplar',
        items: [
          {
            id: 'general-test-variants',
            label: 'Tüm varyantları ayrı ayrı test et.'
          },
          {
            id: 'general-control-group',
            label:
              'Control group kullanıcılarında kampanyanın beklenmeyen şekilde görünmediğini (veya tanıma göre doğru davrandığını) doğrula.'
          }
        ]
      },
      {
        id: 'general-tools',
        title: '3. Test Araçları',
        items: [
          {
            id: 'general-helper-tools',
            label:
              'Insider Helper / UCD Helper ile user attributes ve segment durumlarını kontrol et.'
          },
          {
            id: 'general-evidence',
            label:
              'Loom video, screenshot ve network log’larıyla bulgularını kayıt altına al.'
          }
        ]
      },
      {
        id: 'general-edge-cases',
        title: '4. Edge Case Senaryoları',
        items: [
          {
            id: 'general-edge-inputs',
            label:
              'Geçersiz input’lar, opt-in true/false kombinasyonları, session reset, yüksek trafik / gecikme gibi edge case’leri test et.'
          },
          {
            id: 'general-bug-notes',
            label:
              'Gözlenen tüm sapmaları ve bug’ları not alıp ticket’lara ekle.'
          }
        ]
      }
    ]
  }
};


const STORAGE_PREFIX = 'insider-qa-checklist';

function getStorageKey(tabId) {
  return `${STORAGE_PREFIX}:${tabId}`;
}

function loadState(tabId) {
  return new Promise(resolve => {
    const key = getStorageKey(tabId);
    chrome.storage.sync.get(key, data => {
      resolve(data[key] || {});
    });
  });
}

function saveState(tabId, state) {
  const key = getStorageKey(tabId);
  chrome.storage.sync.set({ [key]: state });
}

const tabs = document.querySelectorAll('.qa-tab');
const contentEl = document.getElementById('qa-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.getAttribute('data-target');
    renderTab(target);
  });
});

async function renderTab(tabId) {
  const data = CHECKLISTS[tabId];
  if (!data) {
    contentEl.innerHTML = '<p>Bu sekme için data bulunamadı.</p>';
    return;
  }

  const state = await loadState(tabId);
  contentEl.innerHTML = '';

  data.sections.forEach(section => {
    const sectionEl = document.createElement('section');
    sectionEl.className = 'qa-section';

    const titleEl = document.createElement('div');
    titleEl.className = 'qa-section-title';
    titleEl.textContent = section.title;

    sectionEl.appendChild(titleEl);

    if (section.description) {
      const descEl = document.createElement('div');
      descEl.className = 'qa-section-desc';
      descEl.textContent = section.description;
      sectionEl.appendChild(descEl);
    }

    section.items.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'qa-item';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      const itemKey = `${section.id}.${item.id}`;
      checkbox.checked = !!state[itemKey];

      checkbox.addEventListener('change', () => {
        const newState = { ...state, [itemKey]: checkbox.checked };
        saveState(tabId, newState);
      });

      const label = document.createElement('label');
      label.className = 'qa-item-label';
      label.textContent = item.label;

      itemEl.appendChild(checkbox);
      itemEl.appendChild(label);
      sectionEl.appendChild(itemEl);
    });

    contentEl.appendChild(sectionEl);
  });
}

renderTab('lead-collection');
