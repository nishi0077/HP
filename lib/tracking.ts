/**
 * トラッキングイベント送信ユーティリティ
 * Meta Pixel, GTM, GA4 に対応
 */

declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: Record<string, any>) => void;
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export type TrackingEvent = 
  | 'page_view'
  | 'view_content'
  | 'scroll_20'
  | 'scroll_50'
  | 'scroll_70'
  | 'initiate_checkout'
  | 'lead'
  | 'complete_registration'
  | 'schedule'
  | 'purchase';

interface TrackingParams {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
  [key: string]: any;
}

/**
 * Meta Pixel イベント送信
 */
export const trackMetaPixel = (event: string, params?: TrackingParams) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', event, params);
  }
};

/**
 * GTM dataLayer push
 */
export const trackGTM = (event: string, params?: TrackingParams) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event,
      ...params,
    });
  }
};

/**
 * GA4 イベント送信
 */
export const trackGA4 = (event: string, params?: TrackingParams) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, params);
  }
};

/**
 * 統合トラッキング関数（Meta + GTM + GA4）
 */
export const track = (event: TrackingEvent, params?: TrackingParams) => {
  const eventMap: Record<TrackingEvent, string> = {
    page_view: 'PageView',
    view_content: 'ViewContent',
    scroll_20: 'Scroll_20',
    scroll_50: 'Scroll_50',
    scroll_70: 'Scroll_70',
    initiate_checkout: 'InitiateCheckout',
    lead: 'Lead',
    complete_registration: 'CompleteRegistration',
    schedule: 'Schedule',
    purchase: 'Purchase',
  };

  const metaEvent = eventMap[event] || event;
  
  // Meta Pixel
  trackMetaPixel(metaEvent, params);
  
  // GTM
  trackGTM(event, params);
  
  // GA4
  trackGA4(event, params);
  
  // デバッグログ（開発環境のみ）
  if (process.env.NODE_ENV === 'development') {
    console.log('[Tracking]', event, params);
  }
};

/**
 * スクロール率トラッキング（初回のみ）
 */
export const trackScrollDepth = () => {
  if (typeof window === 'undefined') return;

  const tracked = {
    '20': false,
    '50': false,
    '70': false,
  };

  const handleScroll = () => {
    const scrollPercentage = 
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercentage >= 20 && !tracked['20']) {
      tracked['20'] = true;
      track('scroll_20', { scroll_depth: 20 });
    }
    if (scrollPercentage >= 50 && !tracked['50']) {
      tracked['50'] = true;
      track('scroll_50', { scroll_depth: 50 });
    }
    if (scrollPercentage >= 70 && !tracked['70']) {
      tracked['70'] = true;
      track('initiate_checkout', { scroll_depth: 70 });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

/**
 * LINE登録完了トラッキング
 */
export const trackLineRegistration = () => {
  track('lead', {
    content_name: 'LINE登録',
    content_category: 'マネジメント講座',
    value: 0,
    currency: 'JPY',
  });
};

/**
 * ウェビナー申込完了トラッキング
 */
export const trackWebinarRegistration = () => {
  track('complete_registration', {
    content_name: 'ウェビナー申込',
    content_category: 'マネジメント講座',
    value: 0,
    currency: 'JPY',
  });
};

/**
 * 個別相談予約完了トラッキング
 */
export const trackConsultationSchedule = () => {
  track('schedule', {
    content_name: '個別相談予約',
    content_category: 'マネジメント講座',
    value: 0,
    currency: 'JPY',
  });
};

/**
 * 講座購入完了トラッキング
 */
export const trackPurchase = (value: number = 298000) => {
  track('purchase', {
    content_name: 'マネジメント実践講座',
    content_category: 'マネジメント講座',
    value,
    currency: 'JPY',
  });
};
