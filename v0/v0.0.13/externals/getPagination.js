function getPagination(t,r){var a,n=t.totalMatching,l=t.numRanks,e=t.currStart,i=t.prevStart,s=t.nextStart,u=Math.ceil(n/l),k=Math.ceil(e/l),h=Math.max(1,k-2),p=Math.min(u,h+4),_=[];for(a=h;a<=p;a++){var c={label:a,isCurrent:k===a,linkType:"num",url:/[?&]/.test(r)?r+"start_rank="+((a-1)*l+1):r+"&start_rank="+((a-1)*l+1)};_.push(c)}return u>5&&k>=4&&_.unshift({label:1,linkType:"first",url:r+"&start_rank=1"}),u>1&&k>1&&_.unshift({linkType:"prev",url:r+"&start_rank="+i}),u>5&&k<u-2&&_.push({label:u,linkType:"last",url:r+"&start_rank="+((u-1)*l+1)}),u>1&&k<u&&_.push({linkType:"next",url:r+"&start_rank="+s}),_}