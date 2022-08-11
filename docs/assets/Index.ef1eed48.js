import { h, r as ref, o as onUpdated, w as watch, n as nextTick$1, a as onMounted, b as onBeforeUnmount, c as onBeforeUpdate, d as computed, _ as _export_sfc, e as defineComponent, f as resolveComponent, g as openBlock, i as createBlock, j as withCtx, k as createBaseVNode, l as createVNode, m as createCommentVNode, p as renderSlot, q as pushScopeId, s as popScopeId, u as useI18n, t as useRouter, v as reactive, G as GetMarketBanners, x as GetMarketHotTopics, y as GetMarketHotNTFs, z as GetMarketNewTopics, M as Mutation, A as createElementBlock, B as renderList, C as unref, F as Fragment, D as toDisplayString, E as useStore, U as UnitName, H as converterBSV, I as converterCNY, J as createTextVNode, K as withModifiers, L as normalizeClass, N as ElButton } from './index.e6d8aff8.js';
import { E as ElSkeletonItem, a as ElSkeleton } from './skeleton.280f6775.js';
import { i as index$1 } from './vue-countdown.esm.918522ea.js';
import { C as CertIcon } from './icon_cer.5f0b2a62.js';
import { B as BsvIcon } from './logo_bsv.3a6b2418.js';

var _imports_0 = "/assets/topic-bg-index.3a64a09a.png";

var _imports_1 = "data:image/png;base64,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";

var _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABGCAYAAABMvIPiAAAAAXNSR0IArs4c6QAAD5RJREFUeF7lnAm0feUYxp/XnDEihAYaECqURpQGVItWo0pp0oTSIGNK/lGaaC61SiVSSyEZkjJkylymUMYyZAqZH+t3/u++a999zh7Ouefec+Jdq/Vv3bPP3t/3fN/3Ds/77BO6G5nt9SQdnUN+fUR8/u4y/Lg7DNT20yQtkrRFZbwfkfSGiPjWtM9jqoG2/QRJb5G0g6R7SLoRYBNUgH+KpP9Iep+kwyPiR9MK+FQCbfvRkt4kaU9J95b0Y0lHSLooIgBWtgF+p/z74yX9U9K7JR0VEbdNG+BTBbTth0o6TNIrJd1f0u2S3irp7Ij4xyDwbN9H0l6S3ijpUZL+KulkScdExO+nBfCpANo2oB4g6TWSlpT0B0nvkPTOiPhLF7BsP0DSqyr3ODbvAfgTtYkCncd/n3QTxW48RdLbB+1G20uXfXRE/LqKXs2pOErSGYXbmQTikwZ6E0mfSP96TvrXXw4A7yGSDpF0oKQH5ud/lnSipOMj4o8DvrNMLuAe6ec3iYirJwEyz5w00EtI2l3SxwZlDLb5/BXpt5eS9CdJJyRYB0l6sKQ7OAGSTo2IuwYATubyfEnnRMTf/i+Brpu07XvlAhwu6TGSAOg0SW+LiN9m1vFwSa+TtJ+k+0n6RaaC50bEvyYFaN1zJ7qjB+w+xrMdLkTSSpIA7HxJR0bEz2qyjsdJerOkXSWxQDeny7gkIjwtgE8N0LZfkNXfGqTJki4FsIj4fhewbK+SC7RNusSvZ9V4VZfvz/c1Ewfa9rq4BEnPzskSHOExvjrK5G0/I/mQTfP7n8HFRMT1o9xvXN+ZGNDJX1CMbJmT+WICcu04Jmd7wwR87bzfhylqJsWLLDjQtimX4S9eUuIvAOCKcQA8wO+/KKvLghe5OHkRyvoFswUDOvkLymTKZfiLW5KnuHC+C4ksjHbO562QefvZLMBC8SLzDnRWapTW8BeUyb/KHXZWHX8xX9sseZGXJy/ySEmU9/Aix843LzJvQJf4i0MlQRYNzV/UpHMApIhgwUay5EXgVhgb3ArkE7zIuyJiXniRsQNtG7dQsGnQnVRrBZv2u5GQWUyLQjzB7FGKY8clQzcyMLYfVmILqUKhVwu2ENp1bDZWoDOT+KCkgh8+l8AXEX38RdcZ2GaMBM5jJD1WUsFrwH/8PIG6eC7FiW14EapQ6ICC/95qnBnKuIGmE0JUJ0XbKyJ+2BXQGjfxTGhOSeTa/5bEwhFQMXYewNxTEjnyARFxwxyftyLct6TnsrgRQedmLDZuoLeVdAklcUSQwo1kmaHQhN0lU0CKjgMjgmpvxmxTRZ6UxQ6dl/dksTNyh8U2O/tISdtGBNXpWGzcQL9YEq7jiIhgsEOZ7ftKejVgSXqQpFsh8iPiA8WNbD+P/4+IT5X+xgITzJaXdGcWKidGxN+HGsDiWABvQtsM13H5sN+vu37cQNOlpgKDZQOszmZ7qwxw+HfSLqjP4wpqMwud4yWxmBggHBwRvcLDNgwegfK1mUby90MigoXvbLY5SbCCW0YEXfax2LiB3gxumTZURJA7t5rtp+bx3yjJpIsAKyKgPQGQnc2isdPZ8WVjx+I6FkUEO5nroVVZJBq3zO+adDvfbh3M4u9zMkj7NosIeJex2LiBXl/SZyWdHhHwxLVm+xHpCykgCGhfSkDgPJgwY3tZugHaXE1GE5fFOK/IPmzDcbAIz8pAelbGjt+0jAvee19J649ToNMJ6CxhmexdTRWU7dUkfUMSZfVL6yZkm6ID/8txh8g/WNIFJZDINk6XxL/DGFnHvkX2kYvFOHA5NApoICzfVOzYvkAS5fpqTeldVrzk3rd3oRAagU6AcQH06gAHnpjJHBoR11URSMELKd0VEVH40j6gbJNGQdBjZAvnZbbQq/ZskyMTlPaXhJygiyFHODWbBL1cOxcUn8vJQAeCrdSUdtrGpzP2FWvaa8/JDj2bAPwYMyeHMr6nORlkbUAjSKG5SfWFS6BvxwOomrao+rB0B3Smr4mIXnYwyGyTHUAqfTf1G8tlPxD10UkFB5JkPj3CF7Yg/VFJBxVNguQ02Byomugr/iTn8CRJK0QEp6lubGQzxIulI2KWm7ENx02ApKhhw9Gv3CDnQE8Swc9wQCchj4gQmdWGRSvJ9vaS3ptHn1WfaRfZxteys26MCNxIG9BkDjtm8OHkQDpxIsgWZmhT2zRX6Xg/sXLD7xEkI4IA3DPb0KKU55washeCGxoRxsxObQMaHd+qnKSIoEgq7sumZGxskh0j4v35PFppn5ZEE3i9ugZD7Y62TdeDVGmniGCQM2abVd08B09numxUa3dGBD6xFeiIIK0DIMprymzKbcaFNAAQ0dvxOf1AXAkuBaMgOqVoxNqGb2YxNk4XR4V6WERQpvP9wiW0AU1ghQSjCi0bJ4NNcWVEzBJb2ubvZEvoUUgN+6wJ6DMk7T1olWwTqBC+1GJJo7TOZ5Vcx+UF0MWNbK+TZfea2Zw9M7MFjimA9Raw1A3HnVEcMVYW4ytZjn+hPLguQGfwxC1yMuvszIiYNffS6e/7rLhJE9D4OHbIrOIj/d9NSRzRUK3uaJg6/HifjyuBWfjoPqATTMZFV5tABgMI6weYp5V2MKCSQrLDYeEou0nxzh9EMHUEGiUUwQ3/C39e3dE0eimEVi1z6aUihxNIYBxqR/PQH6TfpP7nKDIhyBwAvjQiKH1nmW0yCEBaKyLYXX3WtKMruxBVEgGNRScV/E4WLlzGJnhypmxF0YJ6aaB1BJpT9OVcLDKV6tygAuiyAzjkFhsAV4cbIx6sPEimxk3asg4qPYiVQoZVPPhrkjaNiN5xroADT8Au267MUVSuadzRA+5JWU6A6/nzkuF3CZyt/b+OQAMiYKIjYR7VueGmqBafXvmIBd4mIj5et9CtBYvtZSVRvZFFkOZ9EpasQUa7WwYSyCCifZ913dEDJkradWX+ffOIoLzuZB2BpnBiQfeIiGow7D0nXSesIrpBmhHflERb7qdNA2kFutMsShdl9Mdl7BMRqIzGBnROtEeBRgS+u7N1BJqcmGxr56Zcu/NDSxfOAG2bHHXrFHOT0COpGijDansQ+XQ5Bx2wM4dyHeXv2543oNvm1fa5bXJqJG3MjzTxsogg11/so20TcIjq5bSGXt/eEUHtP1Yb1XXM946eyyRtw6mQisJ/FEbBQxNkUWSlR8sGcocgBp3IESKqwjOsGxFE4rHZ/xrQttfKdhpVMVkZdAX0L5uXvH8HgAZE8t51IgKqsmelaocoTDAc1ihYehLbqk0r0FkMjSL5hYIl1aU0Jw0uMISipXC6AaAhz2+NCNSYM5a8BVXSXAImSiDerppl0wi0baTCReN32E3V25uQTdXYZBs17PIADaWIP16mXDIn30qeTOU3qynaYRRUbTQBrosIOsp1QEPGbNyFzy3tkqGDYdK9cCcIHwdyHbYZC2P9XJb+HaY5cwlNYriQpcp8fT4XqcUSAE1BQrYBx0wOWXQ36DRQ0/MaGeTSUGabvBL/tGQ1504dBZkNdCPFD1IBJthqw2YdtllwJAsUGZxQiP9ZOpNsClPl3RER1A1DmW1aZ4h74If2KzUw6GFSS1wG0KR1+Gl6c6wqwZB3rtEZw3ytUedrm0ZT6lRAsfZJcW3DDVNGU31y7JApUOQ0Jv5dgc5CC4qUdAv3R9UGFwEHXj1h7HSKn8bOUN1807dz6mEg0XVDLxMMuS+9zLWK9I5gyFtRvHNdGB2U3buUt4MGkOkOOovGE2EbypFW08pZeTZKvdqArkjHqNzga+iW13a0S5TwLqOms9mlp5qkA1MY3DZV5g2zAl12NKi4bokIuhIjW7aROKI3RUR5AfvumXo9XsYkcDZKvZKipTKkgTpjNdIxAhzCxUYdnW1OMQQVcWpk8SSDsU23CGnwbeXXQjpnFNnGZ4I9GUAXs41UC355lYhgZzVavrBZlXqhUBrIAhY3sw3rBoM3SzpWx6RVFoiTRGZwfUTgMjvZsHi0Am0buhAmi5XC2OkokaBD24ArSBoU/fQDO5nt1TOA8V5LrdRrgHQMd8fC0InvZFkVs7iwgLiwtjmNhEcbTVoAxdErut74ILKF1oFle4qFuTkiqv2+tjlxDAdKvfKLjdKx1pvnBbYJjuzq5Yq2V913bY+MR1OHBeIfkChoyBx6uXQKC8lOUA0xuL73sStHE1qVPl5t47IJlBqpF1+Bo4YHps84Ix3rCnDOBVdBWnl1REB71lq6tZHxaAK6aDgeHRHFj5H0BlLKG0mJGtOx7CjjQxu1Hm0AVaReXD5LOtb2/UGf26YLT9ecGEB7rsnIr+HD+7Io27hF2mh9jezihk1A049DkILyh0R8xmwjDWAnDWP42mWHCaY14PReZ4uInnRsVMuiCRq4ENZ0vRWddfLzMh4UdjSs948ICr0+awK6SOKviohZAhbbCFboGyIt6FKeI7HCv50QEfw7cbNN4OPFff69sMOAKLPJk5vw2CgicKtDAQ03TfRGL0ExU3R3aZSiXkJvsXoTwV88zXahFoJ2RXQzslC8AyCtl2S2giSNIE+cqXby++6RJNvIeLRlHTB6NCOr9T9+meZsp/e0GbVtfBi+rFb70IrQmC6wXWhW+IWx4ufdWu+eBd1IeHTJo9mNuAiKAYwihJ9qaN0FFT+G3IuFQZW6ZvU1idZZjumCzJoIfrSaKKQ6/ZRQ5XQOjUcr0GOaX+82ttFAIC9DoLJ2F7cz5ucXLxbREZlF0o/zOUP56Pl6sG3EJ4gW+YkIKrIFs1IVyC/eEMwXzBZ0R+euplNMUMElEaXpr827JS9N3g9tSRAfqcM/6kAXHOgEG8XRZZKoKpGOtRU9o86vcFksLpw7Yvqth32BaE4Pzy9PBOgEG7dBxQnXsMEgedk4JmgbGRc8DZpnXiqaS19w5CFNEmieTaFAqY+sip9La3yRZ9hZJshwLRQbBGEUSBP5naWJAZ27GhYQ5TyuhNSP1zXm9FpzKQ3jx6/oqsDMIYbcvq0BMOxCDnP9RIFOsOmY864MUl8apLtFxIeGmUT1Wtu8QkE1i8wY/d+ek/6JtokDXdqBdNrx25A8NBVo1A4U4NQtQjZJ6Tmi9oTEouFAh3riNjVA5+5GisYOpOfGD6kAGir/xl/NTQ0Kv/gIYUXPkTe+dl2o1LHLKk4V0Ak2nWt4EZg1BINoskkFkaZdW3oVGXkEghfE4/zH9xAC8bocHPrIP5jSBbhhr5k6oEuuhG4875Hw7h6vM2OoM+lykDkgjS3Ur2Qr+PmTJ80M1i3A1AJdAhxqlVYYr9vReiKLwOiqI1ThDQBaUQN/yHvYnTdf1/8Xa0m1br+ANcAAAAAASUVORK5CYII=";

var _imports_3 = "data:image/png;base64,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";

var _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABNCAYAAAAB1fLJAAAAAXNSR0IArs4c6QAACvVJREFUeF7tnAvQbfUYxp9Hciu5dkUuKeXWjSKX3EpFSCWVUiNUolIUxqA4JUVXUSYdIuNWQxeV0VSUS5SYlCLllrsTEuIxv2/+61jts/fZa+3z7fWtb/LONJ359lr/tdaz3v///77P+7zLmiVLcl9Jr5T0UkkbS1pNUiT9StK3JZ0t6fO2/zlLl+x0GC/r1ZIwxmslvVfSymW8v0r6uSR+e6QkQMR+IekQ259e1ut2ff4yAZVkBUk89Esk/UvSJySdKuk7tv/DwyRZTtIzJL2+eNw9JJ0haS/b/+j6gSe93sRAFZAukvR0ST+QtIvtHy7tRpJsIulTkh4r6QIAni9TcVmAOkvSyyRdXB6Y6YYHPUTSPpKeJAmvugqvs8204/cHS/qKpKdKOs32ayZ9y12eNxFQSZhGH5F0DdPK9gxIlSXZWdLJkh5Q/naHpMMlHWE7SR4q6VuSHiPpFbY/1+VDT3Kt1kAVj7hR0v0kbWj7R8MunGR9SV+ThAdVdrrtPYtnPU3SNyTdKmlt27dP8gBdnTMJUIdJeqeko2wfMmZNeqGk88vuVx16sO1jClgfk8TU29/28V099CTXaQVUknuWbZ8ptabt34+7aJLTJb26dhzTcF3bNyd5tKQbJN1oe91xY83l722B2kLShZLOtL1LkxtPwjr0Y0mECZWdbHvf4lXsfltK2sg2C38vrS1QH5B0sKSdbH+26RMlIYx4Qe342yStavuOJOyQH5b0NttHNh2z6+PaAnWJpGdLWsP2r5vebJIDJH1o4PgtbV+U5IklDjvL9subjtn1cW2BApzlbbO9N7Ykm5Udrn7OO2wvKOve3yVdbxvQemmNgUpC6nEnb982W39jS0KCPOiBp9p+XVmnyAtXsF0PJRqP38WBbYBaUdJfJF1hGw9pbEmIuf42cMJnbBOYEq1fR/Jsu0qeG4/d1YFtgLqXJJLYK22TfjS2JA+U9KeBE86wvVsB6ieSVrF9/8aDdnxgY6DKA+EVv7HNlt/Ykqwn6dqBE462/ZYy7iJJi2yv2XjQjg9sCxTswOMkrdiGIkmyo6TBcGIP2wuTrAL4ki61vXnHz9/4cm2BgkfaVdJmtq9oepUkJMh7146H+XyU7VuSvFjSlyUdb3v/pmN2fVxboGAyT5F0mO13NbnZJKxtUCwV+8lpl9uGzGMhP1HSGyRtb/uLTcaci2PaArV6yfVukrQOlMm4m06yV2E964fOgFIDEaZ0Ndvsqr20VkAVD2CaMF22s03BYKQVSoZ1DYAru9j288pYMAcwCAtt79FLhMpNTQLUMyVdJgkean3bcOVLWOHKARJQK6MisylsZ6GSiZ/WgA21Pbgr9gq31kAVT/iCJPKyE22/cfCJCggUGuq5G7HSthXRl+TMUmxYHKH3CpmBm2kNVJLnSDpO0pNL3Y5tHlBmrNC850qikIDhRacVom9mDRpIkqGEIe74f2+tMVCFV4JmqbyEogKpDGTeQbYBrwKLcVcFE9vESPW/w46+WxI8O9UbxmBToDpzqO1f9hGtsUCVPO3thYe6tyTWlTfbPj/JVlR/SWhLZeWttnn4JayUqo6W9KySzlCq+noJRo8irir54PskHdO3MtZSgUqyraQTSrWXXO09kk6yDYtQeQnUCN5QTUXK53jbzwpXTroDabdhOeWbkl5lmzWrGuM+gA95R9QP5SJpX9sUJ3phQ4EqaQWs4/ZlWny8MJC/HeEt0Lxs7/tJ2mCYQ1E9lnSsJFiDofFXkodL+qAkUh6OWSjpQNt/nmu0lgAqyXYl+oacY8ve2zbhQCNLgtbgKQMiDUrsjdeeMqVPKnU/NgM2DOjkObPFQBVijjIS+da/2aWYanO1VpQQ44iS3gAQnjVnJa06UB+VBONIXrYzC+2cvb7ahYt3UfI623Y9se709maASrJ7WQ9YYDdvM026uFu8vVLHdHG9YddACAD9SpILX72J7avn6mbGXTfJOiU+oxAxdGMZN8akvwMUWgAi51NsI77onZUNghBkhpopKhm4sf26YhwAqpLvtCLjukIzCUEuFWToZGI0/k1ctpakc23Xk+6p3RZA3SIJTdNKttntemW1SjKJ+I5FNsRywWazUVHUTH25ACgqKzf1VSSRBDqHtWk922gYZizJoeitJO1u+5PTfrszqi5JV9uuUoxpX7Px+Ek2lUTKc6FtJESLrcZA7Gmb8GGq1neg8Bg8ZwkwalNyH9uo/6ZqfQeKSg/KvNVto8yrexTFU3gwqJn3TxUlsvu+Tr1CJcNZ3WobwdldLEml1TrW9oF3Z6AA56eSzrP9oiFArV0EaufYhg6aqvXZo9CvXz4qEC5JPNTyH20/Yqoo9XzqwZ4ilB0pqk0CQQiHv5ZtvG9q1meP2obIW9KRtmE+l7AkUNRQx3D2EH5Tsz4D9XxJX4UVHbVYJyGNIQhFWfz4aTIMfQYKSpm8brGOaoRXfYl64bQjdIBC943sEMoXFqEXVnpq0LFfZhuB7VBLQlHjuyzqpeI8FfoFoCggkCuRaFJQoBQ1a+1hJR7iYaq+mDYv4pyi8uMeb7P9vRFeheyaLopL0azP5v1X16sYTooBSG7YZr8vabdR9bk2T5mE+Adt1Gxt3xsPA6soi1nPEKKxU+4wqremvDg6KVZq8SzX1zlzqBbKUsx32lkpVi6wPShSbTR+ElIP3jDTmnXk5kYnjj4I+SI7IEvFsB0QnShdFehLoV3g/SnW3sWSQP61rQfcPqxcBeMJSFDDlJhoH6OvbqhqZSlrB9MGj9q1q9bYJIhlWUboawZQirdoRRevW0U7Qfw106rS8OX9z6PqJyRBHQdAiMAoblKZoVQEYH9oMngSNAfLtRXvNxl7aceUHmco7QWSHlTWOOKx80oRFkEtGq9WOeK4kjrCVkQVOxUxBlOSi9KIeIFtdppRuxEVHQRkK086fZcFtCJie1NpDEeDNWgn2Ob3RjZWpMEoSXgLvCUWwYeVkaGNWQugQoh3WA9Yh5BX35mE8jnFVNyb0INGoc6tLN7kjaQ67L5w7+gljrNNj04jawRUNVJJRFGj0EtM6xgXHRwDncATissDIlk+vcXERDOd6zVjo9jaNpF1J1Zbo2Zv6o278yIaY5fhTQEInge1TJ/woiSsEdC0tPuza9EcdPcDahyQZdpWLWidcNvj7mlOPGrcTf0fqCYIlWNqrf8H1OWLLYaY1UP77FEUKUlah34jYVZRaDBYb4Eq0w+9OdEy4QPN1sO+cUDtjjxtqtZ3oBDDoqBDXjQqJLnENrHOVK3XQFVPnoQAlTbb5w5B49oupDzzBSgi+A1stwp0Z9PF5gtQLOos7nS6L5ZgzyYQ48aaL0CRTO8gaQvbEG2d23wBqqrVwQ9RavqdpEGOG4biqia9gJOgPC+AKqECfTBQNzCfo2xqmqd5A1QBi1IUnyAhHIDf4gMRlbF2UR2u/20S5xl6zrwCqoBVaZ+gWfiUWyc2n4HaZjYi8lKJgaCjDZeqEt+j4lMnfMVj2DSffYZzGq86yUGliIEEmqi9tZUvdGxd0iOki1RiKqM2yfdgBqs2AAdvNj2Gs/WTLOWEJLCgJMoo6bYaV0csjQM0JHEeHkMND9KQxkqMNjkqK/zHt/NuGKZFmHdTr6xT1Ye7YEUpjQ0GoVSX4eYBg38PRvT09bG+UTfkSxxjg9gaUIQmTTu+rpmzVKJyttI5wWfckEjzMYm6LV+mDjQy5S+aJeHXr+TzlHyJo62Xl5Zfcs42H8y57r/C+Ytqji6vXAAAAABJRU5ErkJggg==";

/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */
/* eslint-disable no-param-reassign */
function isObject$2(obj) {
    return (obj !== null &&
        typeof obj === 'object' &&
        'constructor' in obj &&
        obj.constructor === Object);
}
function extend$2(target = {}, src = {}) {
    Object.keys(src).forEach((key) => {
        if (typeof target[key] === 'undefined')
            target[key] = src[key];
        else if (isObject$2(src[key]) &&
            isObject$2(target[key]) &&
            Object.keys(src[key]).length > 0) {
            extend$2(target[key], src[key]);
        }
    });
}

const ssrDocument = {
    body: {},
    addEventListener() { },
    removeEventListener() { },
    activeElement: {
        blur() { },
        nodeName: '',
    },
    querySelector() {
        return null;
    },
    querySelectorAll() {
        return [];
    },
    getElementById() {
        return null;
    },
    createEvent() {
        return {
            initEvent() { },
        };
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() { },
            getElementsByTagName() {
                return [];
            },
        };
    },
    createElementNS() {
        return {};
    },
    importNode() {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
};
function getDocument() {
    const doc = typeof document !== 'undefined' ? document : {};
    extend$2(doc, ssrDocument);
    return doc;
}

const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: '',
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
    history: {
        replaceState() { },
        pushState() { },
        go() { },
        back() { },
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener() { },
    removeEventListener() { },
    getComputedStyle() {
        return {
            getPropertyValue() {
                return '';
            },
        };
    },
    Image() { },
    Date() { },
    screen: {},
    setTimeout() { },
    clearTimeout() { },
    matchMedia() {
        return {};
    },
    requestAnimationFrame(callback) {
        if (typeof setTimeout === 'undefined') {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
        if (typeof setTimeout === 'undefined') {
            return;
        }
        clearTimeout(id);
    },
};
function getWindow() {
    const win = typeof window !== 'undefined' ? window : {};
    extend$2(win, ssrWindow);
    return win;
}

/**
 * Dom7 4.0.4
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2022, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: January 11, 2022
 */

/* eslint-disable no-proto */
function makeReactive(obj) {
  const proto = obj.__proto__;
  Object.defineProperty(obj, '__proto__', {
    get() {
      return proto;
    },

    set(value) {
      proto.__proto__ = value;
    }

  });
}

class Dom7 extends Array {
  constructor(items) {
    if (typeof items === 'number') {
      super(items);
    } else {
      super(...(items || []));
      makeReactive(this);
    }
  }

}

function arrayFlat(arr = []) {
  const res = [];
  arr.forEach(el => {
    if (Array.isArray(el)) {
      res.push(...arrayFlat(el));
    } else {
      res.push(el);
    }
  });
  return res;
}
function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }

  return uniqueArray;
}

// eslint-disable-next-line

function qsa(selector, context) {
  if (typeof selector !== 'string') {
    return [selector];
  }

  const a = [];
  const res = context.querySelectorAll(selector);

  for (let i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }

  return a;
}

function $(selector, context) {
  const window = getWindow();
  const document = getDocument();
  let arr = [];

  if (!context && selector instanceof Dom7) {
    return selector;
  }

  if (!selector) {
    return new Dom7(arr);
  }

  if (typeof selector === 'string') {
    const html = selector.trim();

    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
      let toCreate = 'div';
      if (html.indexOf('<li') === 0) toCreate = 'ul';
      if (html.indexOf('<tr') === 0) toCreate = 'tbody';
      if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
      if (html.indexOf('<tbody') === 0) toCreate = 'table';
      if (html.indexOf('<option') === 0) toCreate = 'select';
      const tempParent = document.createElement(toCreate);
      tempParent.innerHTML = html;

      for (let i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document);
    } // arr = qsa(selector, document);

  } else if (selector.nodeType || selector === window || selector === document) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7) return selector;
    arr = selector;
  }

  return new Dom7(arrayUnique(arr));
}

$.fn = Dom7.prototype;

// eslint-disable-next-line

function addClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    el.classList.add(...classNames);
  });
  return this;
}

function removeClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    el.classList.remove(...classNames);
  });
  return this;
}

function toggleClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    classNames.forEach(className => {
      el.classList.toggle(className);
    });
  });
}

function hasClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  return arrayFilter(this, el => {
    return classNames.filter(className => el.classList.contains(className)).length > 0;
  }).length > 0;
}

function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  } // Set attrs


  for (let i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      for (const attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }

  return this;
}

function removeAttr(attr) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }

  return this;
}

function transform(transform) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform;
  }

  return this;
}

function transition$1(duration) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;
  }

  return this;
}

function on(...args) {
  let [eventType, targetSelector, listener, capture] = args;

  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }

  if (!capture) capture = false;

  function handleLiveEvent(e) {
    const target = e.target;
    if (!target) return;
    const eventData = e.target.dom7EventData || [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      const parents = $(target).parents(); // eslint-disable-line

      for (let k = 0; k < parents.length; k += 1) {
        if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
      }
    }
  }

  function handleEvent(e) {
    const eventData = e && e.target ? e.target.dom7EventData || [] : [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    listener.apply(this, eventData);
  }

  const events = eventType.split(' ');
  let j;

  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
        el.dom7LiveListeners[event].push({
          listener,
          proxyListener: handleLiveEvent
        });
        el.addEventListener(event, handleLiveEvent, capture);
      }
    }
  }

  return this;
}

function off(...args) {
  let [eventType, targetSelector, listener, capture] = args;

  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }

  if (!capture) capture = false;
  const events = eventType.split(' ');

  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];

    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let handlers;

      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }

      if (handlers && handlers.length) {
        for (let k = handlers.length - 1; k >= 0; k -= 1) {
          const handler = handlers[k];

          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }

  return this;
}

function trigger(...args) {
  const window = getWindow();
  const events = args[0].split(' ');
  const eventData = args[1];

  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];

    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];

      if (window.CustomEvent) {
        const evt = new window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }

  return this;
}

function transitionEnd$1(callback) {
  const dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('transitionend', fireCallBack);
  }

  if (callback) {
    dom.on('transitionend', fireCallBack);
  }

  return this;
}

function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      const styles = this.styles();
      return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      const styles = this.styles();
      return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function offset() {
  if (this.length > 0) {
    const window = getWindow();
    const document = getDocument();
    const el = this[0];
    const box = el.getBoundingClientRect();
    const body = document.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window ? window.scrollY : el.scrollTop;
    const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }

  return null;
}

function styles() {
  const window = getWindow();
  if (this[0]) return window.getComputedStyle(this[0], null);
  return {};
}

function css(props, value) {
  const window = getWindow();
  let i;

  if (arguments.length === 1) {
    if (typeof props === 'string') {
      // .css('width')
      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      // .css({ width: '100px' })
      for (i = 0; i < this.length; i += 1) {
        for (const prop in props) {
          this[i].style[prop] = props[prop];
        }
      }

      return this;
    }
  }

  if (arguments.length === 2 && typeof props === 'string') {
    // .css('width', '100px')
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }

    return this;
  }

  return this;
}

function each(callback) {
  if (!callback) return this;
  this.forEach((el, index) => {
    callback.apply(el, [el, index]);
  });
  return this;
}

function filter(callback) {
  const result = arrayFilter(this, callback);
  return $(result);
}

function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : null;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }

  return this;
}

function text(text) {
  if (typeof text === 'undefined') {
    return this[0] ? this[0].textContent.trim() : null;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }

  return this;
}

function is(selector) {
  const window = getWindow();
  const document = getDocument();
  const el = this[0];
  let compareWith;
  let i;
  if (!el || typeof selector === 'undefined') return false;

  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  if (selector === document) {
    return el === document;
  }

  if (selector === window) {
    return el === window;
  }

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  return false;
}

function index() {
  let child = this[0];
  let i;

  if (child) {
    i = 0; // eslint-disable-next-line

    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }

    return i;
  }

  return undefined;
}

function eq(index) {
  if (typeof index === 'undefined') return this;
  const length = this.length;

  if (index > length - 1) {
    return $([]);
  }

  if (index < 0) {
    const returnIndex = length + index;
    if (returnIndex < 0) return $([]);
    return $([this[returnIndex]]);
  }

  return $([this[index]]);
}

function append(...els) {
  let newChild;
  const document = getDocument();

  for (let k = 0; k < els.length; k += 1) {
    newChild = els[k];

    for (let i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;

        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (let j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}

function prepend(newChild) {
  const document = getDocument();
  let i;
  let j;

  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = newChild;

      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }

  return this;
}

function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }

      return $([]);
    }

    if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
    return $([]);
  }

  return $([]);
}

function nextAll(selector) {
  const nextEls = [];
  let el = this[0];
  if (!el) return $([]);

  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if ($(next).is(selector)) nextEls.push(next);
    } else nextEls.push(next);

    el = next;
  }

  return $(nextEls);
}

function prev(selector) {
  if (this.length > 0) {
    const el = this[0];

    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return $([el.previousElementSibling]);
      }

      return $([]);
    }

    if (el.previousElementSibling) return $([el.previousElementSibling]);
    return $([]);
  }

  return $([]);
}

function prevAll(selector) {
  const prevEls = [];
  let el = this[0];
  if (!el) return $([]);

  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line

    if (selector) {
      if ($(prev).is(selector)) prevEls.push(prev);
    } else prevEls.push(prev);

    el = prev;
  }

  return $(prevEls);
}

function parent(selector) {
  const parents = []; // eslint-disable-line

  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }

  return $(parents);
}

function parents(selector) {
  const parents = []; // eslint-disable-line

  for (let i = 0; i < this.length; i += 1) {
    let parent = this[i].parentNode; // eslint-disable-line

    while (parent) {
      if (selector) {
        if ($(parent).is(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }

      parent = parent.parentNode;
    }
  }

  return $(parents);
}

function closest(selector) {
  let closest = this; // eslint-disable-line

  if (typeof selector === 'undefined') {
    return $([]);
  }

  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }

  return closest;
}

function find(selector) {
  const foundElements = [];

  for (let i = 0; i < this.length; i += 1) {
    const found = this[i].querySelectorAll(selector);

    for (let j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }

  return $(foundElements);
}

function children(selector) {
  const children = []; // eslint-disable-line

  for (let i = 0; i < this.length; i += 1) {
    const childNodes = this[i].children;

    for (let j = 0; j < childNodes.length; j += 1) {
      if (!selector || $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }

  return $(children);
}

function remove() {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }

  return this;
}

const Methods = {
  addClass,
  removeClass,
  hasClass,
  toggleClass,
  attr,
  removeAttr,
  transform,
  transition: transition$1,
  on,
  off,
  trigger,
  transitionEnd: transitionEnd$1,
  outerWidth,
  outerHeight,
  styles,
  offset,
  css,
  each,
  html,
  text,
  is,
  index,
  eq,
  append,
  prepend,
  next,
  nextAll,
  prev,
  prevAll,
  parent,
  parents,
  closest,
  find,
  children,
  filter,
  remove
};
Object.keys(Methods).forEach(methodName => {
  Object.defineProperty($.fn, methodName, {
    value: Methods[methodName],
    writable: true
  });
});

function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {// no getter for object
    }

    try {
      delete object[key];
    } catch (e) {// something got wrong
    }
  });
}

function nextTick(callback, delay = 0) {
  return setTimeout(callback, delay);
}

function now() {
  return Date.now();
}

function getComputedStyle$1(el) {
  const window = getWindow();
  let style;

  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }

  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }

  if (!style) {
    style = el.style;
  }

  return style;
}

function getTranslate(el, axis = 'x') {
  const window = getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle$1(el);

  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;

    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    } // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case


    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }

  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }

  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }

  return curTransform || 0;
}

function isObject$1(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}

function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }

  return node && (node.nodeType === 1 || node.nodeType === 11);
}

function extend$1(...args) {
  const to = Object(args[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];

  for (let i = 1; i < args.length; i += 1) {
    const nextSource = args[i];

    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);

      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

        if (desc !== undefined && desc.enumerable) {
          if (isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend$1(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
            to[nextKey] = {};

            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend$1(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }

  return to;
}

function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}

function animateCSSModeScroll({
  swiper,
  targetPosition,
  side
}) {
  const window = getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';

  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };

  const animate = () => {
    time = new Date().getTime();

    if (startTime === null) {
      startTime = time;
    }

    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);

    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }

    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });

    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }

    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };

  animate();
}

let support;

function calcSupport() {
  const window = getWindow();
  const document = getDocument();
  return {
    smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    passiveListener: function checkPassiveListener() {
      let supportsPassive = false;

      try {
        const opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get() {
            supportsPassive = true;
          }

        });
        window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {// No support
      }

      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in window;
    }()
  };
}

function getSupport() {
  if (!support) {
    support = calcSupport();
  }

  return support;
}

let deviceCached;

function calcDevice({
  userAgent
} = {}) {
  const support = getSupport();
  const window = getWindow();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel'; // iPadOs 13 fix

  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  } // Android


  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }

  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  } // Export object


  return device;
}

function getDevice(overrides = {}) {
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }

  return deviceCached;
}

let browser;

function calcBrowser() {
  const window = getWindow();

  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }

  return {
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}

function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }

  return browser;
}

function Resize({
  swiper,
  on,
  emit
}) {
  const window = getWindow();
  let observer = null;

  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };

  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      const {
        width,
        height
      } = swiper;
      let newWidth = width;
      let newHeight = height;
      entries.forEach(({
        contentBoxSize,
        contentRect,
        target
      }) => {
        if (target && target !== swiper.el) return;
        newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
        newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
      });

      if (newWidth !== width || newHeight !== height) {
        resizeHandler();
      }
    });
    observer.observe(swiper.el);
  };

  const removeObserver = () => {
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };

  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };

  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }

    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

function Observer({
  swiper,
  extendParams,
  on,
  emit
}) {
  const observers = [];
  const window = getWindow();

  const attach = (target, options = {}) => {
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }

      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };

  const init = () => {
    if (!swiper.params.observer) return;

    if (swiper.params.observeParents) {
      const containerParents = swiper.$el.parents();

      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    } // Observe container


    attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    }); // Observe wrapper

    attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  };

  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };

  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/* eslint-disable no-underscore-dangle */
var eventsEmitter = {
  on(events, handler, priority) {
    const self = this;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },

  once(events, handler, priority) {
    const self = this;
    if (typeof handler !== 'function') return self;

    function onceHandler(...args) {
      self.off(events, onceHandler);

      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }

      handler.apply(self, args);
    }

    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },

  onAny(handler, priority) {
    const self = this;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';

    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }

    return self;
  },

  offAny(handler) {
    const self = this;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);

    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }

    return self;
  },

  off(events, handler) {
    const self = this;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },

  emit(...args) {
    const self = this;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;

    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }

    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }

      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }

};

function updateSize() {
  const swiper = this;
  let width;
  let height;
  const $el = swiper.$el;

  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }

  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }

  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  } // Subtract paddings


  width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
  height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  const swiper = this;

  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    } // prettier-ignore


    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }

  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }

  const params = swiper.params;
  const {
    $wrapperEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;

  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  let offsetAfter = params.slidesOffsetAfter;

  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;

  if (typeof swiperSize === 'undefined') {
    return;
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginBottom: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: '',
    marginTop: ''
  }); // reset cssMode offsets

  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', '');
    setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', '');
  }

  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;

  if (gridEnabled) {
    swiper.grid.initSlides(slidesLength);
  } // Calc slides


  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;

  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    const slide = slides.eq(i);

    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
    }

    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[getDirectionLabel('width')] = ``;
      }

      const slideStyles = getComputedStyle(slide[0]);
      const currentTransform = slide[0].style.transform;
      const currentWebKitTransform = slide[0].style.webkitTransform;

      if (currentTransform) {
        slide[0].style.transform = 'none';
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');

        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide[0];
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }

      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }

    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }

  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }

  if (params.setWrapperSize) {
    $wrapperEl.css({
      [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }

  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
  } // Remove last grid elements depending on width


  if (!params.centeredSlides) {
    const newSlidesGrid = [];

    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);

      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }

    snapGrid = newSlidesGrid;

    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }

  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode) return true;

      if (slideIndex === slides.length - 1) {
        return false;
      }

      return true;
    }).css({
      [key]: `${spaceBetween}px`
    });
  }

  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(snap => {
      if (snap < 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }

  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;

    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });

  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }

  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }

  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
}

function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;

  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }

  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides.filter(el => parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index)[0];
    }

    return swiper.slides.eq(index)[0];
  }; // Find slides currently in view


  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      swiper.visibleSlides.each(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  } // Find new height from highest slide in view


  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  } // Update Height


  if (newHeight || newHeight === 0) swiper.$wrapperEl.css('height', `${newHeight}px`);
}

function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;

  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

function updateSlidesProgress(translate = this && this.translate || 0) {
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;

    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }

    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
      slides.eq(i).addClass(params.slideVisibleClass);
    }

    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }

  swiper.visibleSlides = $(swiper.visibleSlides);
}

function updateProgress(translate) {
  const swiper = this;

  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }

  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;

  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }

  Object.assign(swiper, {
    progress,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }

  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }

  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}

function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    $wrapperEl,
    activeIndex,
    realIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
  let activeSlide;

  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
  } else {
    activeSlide = slides.eq(activeIndex);
  } // Active classes


  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    }
  } // Next Slide


  let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);

  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  } // Prev Slide


  let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);

  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }

  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
    }

    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
    }
  }

  swiper.emitSlidesClasses();
}

function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    slidesGrid,
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;

  if (typeof activeIndex === 'undefined') {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    } // Normalize slideIndex


    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }

  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }

    return;
  } // Get real index


  const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  Object.assign(swiper, {
    snapIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');

  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }

  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}

function updateClickedSlide(e) {
  const swiper = this;
  const params = swiper.params;
  const slide = $(e).closest(`.${params.slideClass}`)[0];
  let slideFound = false;
  let slideIndex;

  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;

    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }

  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};

function getSwiperTranslate(axis = this.isHorizontal() ? 'x' : 'y') {
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    $wrapperEl
  } = swiper;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  if (params.cssMode) {
    return translate;
  }

  let currentTranslate = getTranslate($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    $wrapperEl,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
  }

  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

  swiper.updateProgress(newTranslate);

  if (params.cssMode) {
    const isH = swiper.isHorizontal();

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }

      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;

          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
    }
  }

  return true;
}

var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};

function setTransition(duration, byController) {
  const swiper = this;

  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }

  swiper.emit('setTransition', duration, byController);
}

function transitionEmit({
  swiper,
  runCallbacks,
  direction,
  step
}) {
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit(`transition${step}`);

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }

    swiper.emit(`slideChangeTransition${step}`);

    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

function transitionStart(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;

  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

function transitionEnd(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};

function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
  if (typeof index !== 'number' && typeof index !== 'string') {
    throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
  }

  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    const indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    const isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;

  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }

  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  const translate = -snapGrid[snapIndex]; // Update progress

  swiper.updateProgress(translate); // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  } // Directions locks


  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }

    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    swiper.updateSlidesClasses();

    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }

    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }

    return false;
  }

  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;

    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }

      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;

      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._swiperImmediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }

      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }

    return true;
  }

  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);

  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;

    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }

    swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
    swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
  }

  return true;
}

function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  let newIndex = index;

  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    animating,
    enabled,
    params
  } = swiper;
  if (!enabled) return swiper;
  let perGroup = params.slidesPerGroup;

  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }

  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }

  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    params,
    animating,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return swiper;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  const translate = rtlTranslate ? swiper.translate : -swiper.translate;

  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }

  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

  if (typeof prevSnap === 'undefined' && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });

    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }

  let prevIndex = 0;

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;

    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }

  if (params.rewind && swiper.isBeginning) {
    return swiper.slideTo(swiper.slides.length - 1, speed, runCallbacks, internal);
  }

  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
  const swiper = this;
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];

    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];

    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }

  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  const swiper = this;
  const {
    params,
    $wrapperEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;

  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
      nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};

function loopCreate() {
  const swiper = this;
  const document = getDocument();
  const {
    params,
    $wrapperEl
  } = swiper; // Remove duplicated slides

  const $selector = $wrapperEl.children().length > 0 ? $($wrapperEl.children()[0].parentNode) : $wrapperEl;
  $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
  let slides = $selector.children(`.${params.slideClass}`);

  if (params.loopFillGroupWithBlank) {
    const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

    if (blankSlidesNum !== params.slidesPerGroup) {
      for (let i = 0; i < blankSlidesNum; i += 1) {
        const blankNode = $(document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
        $selector.append(blankNode);
      }

      slides = $selector.children(`.${params.slideClass}`);
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;

  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  const prependSlides = [];
  const appendSlides = [];
  slides.each((el, index) => {
    const slide = $(el);

    if (index < swiper.loopedSlides) {
      appendSlides.push(el);
    }

    if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
      prependSlides.push(el);
    }

    slide.attr('data-swiper-slide-index', index);
  });

  for (let i = 0; i < appendSlides.length; i += 1) {
    $selector.append($(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }

  for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
    $selector.prepend($(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

function loopFix() {
  const swiper = this;
  swiper.emit('beforeLoopFix');
  const {
    activeIndex,
    slides,
    loopedSlides,
    allowSlidePrev,
    allowSlideNext,
    snapGrid,
    rtlTranslate: rtl
  } = swiper;
  let newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  const snapTranslate = -snapGrid[activeIndex];
  const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }

  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit('loopFix');
}

function loopDestroy() {
  const swiper = this;
  const {
    $wrapperEl,
    params,
    slides
  } = swiper;
  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
  slides.removeAttr('data-swiper-slide-index');
}

var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};

function setGrabCursor(moving) {
  const swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

function unsetGrabCursor() {
  const swiper = this;

  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }

  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
}

var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};

function closestElement(selector, base = this) {
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    return found || __closestFrom(el.getRootNode().host);
  }

  return __closestFrom(base);
}

function onTouchStart(event) {
  const swiper = this;
  const document = getDocument();
  const window = getWindow();
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }

  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }

  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let $targetEl = $(e.target);

  if (params.touchEventsTarget === 'wrapper') {
    if (!$targetEl.closest(swiper.wrapperEl).length) return;
  }

  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return; // change target el for shadow root component

  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

  if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
    $targetEl = $(event.path[0]);
  }

  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
    swiper.allowClick = true;
    return;
  }

  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
    } else {
      return;
    }
  }

  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;

  if (e.type !== 'touchstart') {
    let preventDefault = true;
    if ($targetEl.is(data.focusableElements)) preventDefault = false;

    if (document.activeElement && $(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
      document.activeElement.blur();
    }

    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
      e.preventDefault();
    }
  }

  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  const document = getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    return;
  }

  if (data.isTouchEvent && e.type !== 'touchmove') return;
  const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
  const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;

    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }

    return;
  }

  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }

  if (data.isTouchEvent && document.activeElement) {
    if (e.target === document.activeElement && $(e.target).is(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }

  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }

  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;

    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }

  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }

  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }

  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }

  if (!data.startMoving) {
    return;
  }

  swiper.allowClick = false;

  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop && !params.cssMode) {
      swiper.loopFix();
    }

    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);

    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }

    data.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }

    swiper.emit('sliderFirstMove', e);
  }

  swiper.emit('sliderMove', e);
  data.isMoved = true;
  let diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks


  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  } // Threshold


  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger || params.cssMode) return; // Update active index in free mode

  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  } // Update progress


  swiper.updateProgress(data.currentTranslate); // Update translate

  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }

  data.allowTouchCallbacks = false;

  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }

    data.isMoved = false;
    data.startMoving = false;
    return;
  } // Return Grab Cursor


  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff


  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
    swiper.emit('tap click', e);

    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }

  data.lastClickTime = now();
  nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;

  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.cssMode) {
    return;
  }

  if (swiper.params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  } // Find current slide


  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];

  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  } // Find current slide size


  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }

    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + increment);
      }

      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return; // Breakpoints

  if (params.breakpoints) {
    swiper.setBreakpoint();
  } // Save locks


  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper; // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();

  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }

  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  } // Return locks after resize


  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();

    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;

  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  } // eslint-disable-next-line


  if (swiper.translate === -0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }

  swiper.emit('setTranslate', swiper.translate, false);
}

let dummyEventAttached = false;

function dummyEventListener() {}

const events = (swiper, method) => {
  const document = getDocument();
  const {
    params,
    touchEvents,
    el,
    wrapperEl,
    device,
    support
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method; // Touch Events

  if (!support.touch) {
    el[domMethod](touchEvents.start, swiper.onTouchStart, false);
    document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
    document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
  } else {
    const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
    el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
      passive: false,
      capture
    } : capture);
    el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);

    if (touchEvents.cancel) {
      el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  } // Resize handler


  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper[swiperMethod]('observerUpdate', onResize, true);
  }
};

function attachEvents() {
  const swiper = this;
  const document = getDocument();
  const {
    params,
    support
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);

  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }

  swiper.onClick = onClick.bind(swiper);

  if (support.touch && !dummyEventAttached) {
    document.addEventListener('touchstart', dummyEventListener);
    dummyEventAttached = true;
  }

  events(swiper, 'on');
}

function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}

var events$1 = {
  attachEvents,
  detachEvents
};

const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};

function setBreakpoint() {
  const swiper = this;
  const {
    activeIndex,
    initialized,
    loopedSlides = 0,
    params,
    $el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

  const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasEnabled = params.enabled;

  if (wasMultiRow && !isMultiRow) {
    $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    $el.addClass(`${params.containerModifierClass}grid`);

    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      $el.addClass(`${params.containerModifierClass}grid-column`);
    }

    swiper.emitContainerClasses();
  }

  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

  if (directionChanged && initialized) {
    swiper.changeDirection();
  }

  extend$1(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });

  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }

  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);

  if (needsReLoop && initialized) {
    swiper.loopDestroy();
    swiper.loopCreate();
    swiper.updateSlides();
    swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
  }

  swiper.emit('breakpoint', breakpointParams);
}

function getBreakpoint(breakpoints, base = 'window', containerEl) {
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = getWindow();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }

    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));

  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];

    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }

  return breakpoint || 'max';
}

var breakpoints = {
  setBreakpoint,
  getBreakpoint
};

function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}

function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    $el,
    device,
    support
  } = swiper; // prettier-ignore

  const suffixes = prepareClasses(['initialized', params.direction, {
    'pointer-events': !support.touch
  }, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  $el.addClass([...classNames].join(' '));
  swiper.emitContainerClasses();
}

function removeClasses() {
  const swiper = this;
  const {
    $el,
    classNames
  } = swiper;
  $el.removeClass(classNames.join(' '));
  swiper.emitContainerClasses();
}

var classes = {
  addClasses,
  removeClasses
};

function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  const window = getWindow();
  let image;

  function onReady() {
    if (callback) callback();
  }

  const isPicture = $(imageEl).parent('picture')[0];

  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new window.Image();
      image.onload = onReady;
      image.onerror = onReady;

      if (sizes) {
        image.sizes = sizes;
      }

      if (srcset) {
        image.srcset = srcset;
      }

      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

function preloadImages() {
  const swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');

  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }

  for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
    const imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}

var images = {
  loadImage,
  preloadImages
};

function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;

  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }

  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }

  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }

  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}

var checkOverflow$1 = {
  checkOverflow
};

var defaults = {
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,
  loopPreventsSlide: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj = {}) {
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];

    if (typeof moduleParams !== 'object' || moduleParams === null) {
      extend$1(allModulesParams, obj);
      return;
    }

    if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
      params[moduleParamName] = {
        auto: true
      };
    }

    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      extend$1(allModulesParams, obj);
      return;
    }

    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }

    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }

    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    extend$1(allModulesParams, obj);
  };
}

/* eslint no-param-reassign: "off" */
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes,
  images
};
const extendedDefaults = {};

class Swiper$1 {
  constructor(...args) {
    let el;
    let params;

    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }

    if (!params) params = {};
    params = extend$1({}, params);
    if (el && !params.el) params.el = el;

    if (params.el && $(params.el).length > 1) {
      const swipers = [];
      $(params.el).each(containerEl => {
        const newParams = extend$1({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper$1(newParams));
      });
      return swipers;
    } // Swiper Instance


    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];

    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }

    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    }); // Extend defaults with modules params

    const swiperParams = extend$1({}, defaults, allModulesParams); // Extend defaults with passed params

    swiper.params = extend$1({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = extend$1({}, swiper.params);
    swiper.passedParams = extend$1({}, params); // add event listeners

    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }

    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    } // Save Dom lib


    swiper.$ = $; // Extend Swiper

    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: $(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],

      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },

      isVertical() {
        return swiper.params.direction === 'vertical';
      },

      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        const desktop = ['pointerdown', 'pointermove', 'pointerup'];
        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: now(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper'); // Init

    if (swiper.params.init) {
      swiper.init();
    } // Return app instance


    return swiper;
  }

  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;

    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }

    swiper.emit('enable');
  }

  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;

    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }

    swiper.emit('disable');
  }

  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }

  getSlideClasses(slideEl) {
    const swiper = this;
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }

  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.each(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }

  slidesPerViewDynamic(view = 'current', exact = false) {
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;

    if (params.centeredSlides) {
      let slideSize = slides[activeIndex].swiperSlideSize;
      let breakLoop;

      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }

      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;

          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;

          if (slideInView) {
            spv += 1;
          }
        }
      }
    }

    return spv;
  }

  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper; // Breakpoints

    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    let translated;

    if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
      setTranslate();

      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (!translated) {
        setTranslate();
      }
    }

    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }

    swiper.emit('update');
  }

  changeDirection(newDirection, needUpdate = true) {
    const swiper = this;
    const currentDirection = swiper.params.direction;

    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }

    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }

    swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.each(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }

  mount(el) {
    const swiper = this;
    if (swiper.mounted) return true; // Find el

    const $el = $(el || swiper.params.el);
    el = $el[0];

    if (!el) {
      return false;
    }

    el.swiper = swiper;

    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };

    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = $(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

        res.children = options => $el.children(options);

        return res;
      }

      return $el.children(getWrapperSelector());
    }; // Find Wrapper


    let $wrapperEl = getWrapper();

    if ($wrapperEl.length === 0 && swiper.params.createElements) {
      const document = getDocument();
      const wrapper = document.createElement('div');
      $wrapperEl = $(wrapper);
      wrapper.className = swiper.params.wrapperClass;
      $el.append(wrapper);
      $el.children(`.${swiper.params.slideClass}`).each(slideEl => {
        $wrapperEl.append(slideEl);
      });
    }

    Object.assign(swiper, {
      $el,
      el,
      $wrapperEl,
      wrapperEl: $wrapperEl[0],
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box'
    });
    return true;
  }

  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit'); // Set breakpoint

    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    } // Add Classes


    swiper.addClasses(); // Create loop

    if (swiper.params.loop) {
      swiper.loopCreate();
    } // Update size


    swiper.updateSize(); // Update slides

    swiper.updateSlides();

    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    } // Set Grab Cursor


    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    } // Slide To Initial Slide


    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    } // Attach events


    swiper.attachEvents(); // Init Flag

    swiper.initialized = true; // Emit

    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }

  destroy(deleteInstance = true, cleanStyles = true) {
    const swiper = this;
    const {
      params,
      $el,
      $wrapperEl,
      slides
    } = swiper;

    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }

    swiper.emit('beforeDestroy'); // Init Flag

    swiper.initialized = false; // Detach events

    swiper.detachEvents(); // Destroy loop

    if (params.loop) {
      swiper.loopDestroy();
    } // Cleanup styles


    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');

      if (slides && slides.length) {
        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
      }
    }

    swiper.emit('destroy'); // Detach emitter events

    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });

    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      deleteProps(swiper);
    }

    swiper.destroyed = true;
    return null;
  }

  static extendDefaults(newDefaults) {
    extend$1(extendedDefaults, newDefaults);
  }

  static get extendedDefaults() {
    return extendedDefaults;
  }

  static get defaults() {
    return defaults;
  }

  static installModule(mod) {
    if (!Swiper$1.prototype.__modules__) Swiper$1.prototype.__modules__ = [];
    const modules = Swiper$1.prototype.__modules__;

    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }

  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper$1.installModule(m));
      return Swiper$1;
    }

    Swiper$1.installModule(module);
    return Swiper$1;
  }

}

Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper$1.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper$1.use([Resize, Observer]);

function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  const document = getDocument();

  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = swiper.$el.children(`.${checkProps[key]}`)[0];

        if (!element) {
          element = document.createElement('div');
          element.className = checkProps[key];
          swiper.$el.append(element);
        }

        params[key] = element;
        originalParams[key] = element;
      }
    });
  }

  return params;
}

function Navigation({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock'
    }
  });
  swiper.navigation = {
    nextEl: null,
    $nextEl: null,
    prevEl: null,
    $prevEl: null
  };

  function getEl(el) {
    let $el;

    if (el) {
      $el = $(el);

      if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) {
        $el = swiper.$el.find(el);
      }
    }

    return $el;
  }

  function toggleEl($el, disabled) {
    const params = swiper.params.navigation;

    if ($el && $el.length > 0) {
      $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
      if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;

      if (swiper.params.watchOverflow && swiper.enabled) {
        $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    }
  }

  function update() {
    // Update Navigation Buttons
    if (swiper.params.loop) return;
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
  }

  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
  }

  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
  }

  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    const $nextEl = getEl(params.nextEl);
    const $prevEl = getEl(params.prevEl);

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', onNextClick);
    }

    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', onPrevClick);
    }

    Object.assign(swiper.navigation, {
      $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });

    if (!swiper.enabled) {
      if ($nextEl) $nextEl.addClass(params.lockClass);
      if ($prevEl) $prevEl.addClass(params.lockClass);
    }
  }

  function destroy() {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;

    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }

    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }

  on('init', () => {
    init();
    update();
  });
  on('toEdge fromEdge lock unlock', () => {
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;

    if ($nextEl) {
      $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
    }

    if ($prevEl) {
      $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
    }
  });
  on('click', (_s, e) => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    const targetEl = e.target;

    if (swiper.params.navigation.hideOnClick && !$(targetEl).is($prevEl) && !$(targetEl).is($nextEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;

      if ($nextEl) {
        isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
      } else if ($prevEl) {
        isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
      }

      if (isHidden === true) {
        emit('navigationShow');
      } else {
        emit('navigationHide');
      }

      if ($nextEl) {
        $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
      }

      if ($prevEl) {
        $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
      }
    }
  });
  Object.assign(swiper.navigation, {
    update,
    init,
    destroy
  });
}

function classesToSelector(classes = '') {
  return `.${classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
}

function Pagination({
  swiper,
  extendParams,
  on,
  emit
}) {
  const pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`
    }
  });
  swiper.pagination = {
    el: null,
    $el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;

  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
  }

  function setSideBullets($bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
  }

  function update() {
    // Render || Update Pagination bullets/items
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el; // Current/Total

    let current;
    const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }

      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    } // Types


    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;

      if (params.dynamicBullets) {
        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', `${bulletSize * (params.dynamicMainBullets + 4)}px`);

        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);

          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }

        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }

      bullets.removeClass(['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`).join(' '));

      if ($el.length > 1) {
        bullets.each(bullet => {
          const $bullet = $(bullet);
          const bulletIndex = $bullet.index();

          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }

          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(`${params.bulletActiveClass}-main`);
            }

            if (bulletIndex === firstIndex) {
              setSideBullets($bullet, 'prev');
            }

            if (bulletIndex === lastIndex) {
              setSideBullets($bullet, 'next');
            }
          }
        });
      } else {
        const $bullet = bullets.eq(current);
        const bulletIndex = $bullet.index();
        $bullet.addClass(params.bulletActiveClass);

        if (params.dynamicBullets) {
          const $firstDisplayedBullet = bullets.eq(firstIndex);
          const $lastDisplayedBullet = bullets.eq(lastIndex);

          for (let i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
          }

          if (swiper.params.loop) {
            if (bulletIndex >= bullets.length) {
              for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
              }

              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
            } else {
              setSideBullets($firstDisplayedBullet, 'prev');
              setSideBullets($lastDisplayedBullet, 'next');
            }
          } else {
            setSideBullets($firstDisplayedBullet, 'prev');
            setSideBullets($lastDisplayedBullet, 'next');
          }
        }
      }

      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
      }
    }

    if (params.type === 'fraction') {
      $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
      $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
    }

    if (params.type === 'progressbar') {
      let progressbarDirection;

      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }

      const scale = (current + 1) / total;
      let scaleX = 1;
      let scaleY = 1;

      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }

      $el.find(classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
    }

    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      emit('paginationRender', $el[0]);
    } else {
      emit('paginationUpdate', $el[0]);
    }

    if (swiper.params.watchOverflow && swiper.enabled) {
      $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  }

  function render() {
    // Render Container
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el;
    let paginationHTML = '';

    if (params.type === 'bullets') {
      let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }

      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }

      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
    }

    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
      }

      $el.html(paginationHTML);
    }

    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }

      $el.html(paginationHTML);
    }

    if (params.type !== 'custom') {
      emit('paginationRender', swiper.pagination.$el[0]);
    }
  }

  function init() {
    swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: 'swiper-pagination'
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let $el = $(params.el);
    if ($el.length === 0) return;

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
      $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper

      if ($el.length > 1) {
        $el = $el.filter(el => {
          if ($(el).parents('.swiper')[0] !== swiper.el) return false;
          return true;
        });
      }
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);
    $el.addClass(params.modifierClass + swiper.params.direction);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
      dynamicBulletIndex = 0;

      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }

    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', classesToSelector(params.bulletClass), function onClick(e) {
        e.preventDefault();
        let index = $(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }

    Object.assign(swiper.pagination, {
      $el,
      el: $el[0]
    });

    if (!swiper.enabled) {
      $el.addClass(params.lockClass);
    }
  }

  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    $el.removeClass(params.modifierClass + swiper.params.direction);
    if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

    if (params.clickable) {
      $el.off('click', classesToSelector(params.bulletClass));
    }
  }

  on('init', () => {
    init();
    render();
    update();
  });
  on('activeIndexChange', () => {
    if (swiper.params.loop) {
      update();
    } else if (typeof swiper.snapIndex === 'undefined') {
      update();
    }
  });
  on('snapIndexChange', () => {
    if (!swiper.params.loop) {
      update();
    }
  });
  on('slidesLengthChange', () => {
    if (swiper.params.loop) {
      render();
      update();
    }
  });
  on('snapGridLengthChange', () => {
    if (!swiper.params.loop) {
      render();
      update();
    }
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    const {
      $el
    } = swiper.pagination;

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
    }
  });
  on('lock unlock', () => {
    update();
  });
  on('click', (_s, e) => {
    const targetEl = e.target;
    const {
      $el
    } = swiper.pagination;

    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !$(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);

      if (isHidden === true) {
        emit('paginationShow');
      } else {
        emit('paginationHide');
      }

      $el.toggleClass(swiper.params.pagination.hiddenClass);
    }
  });
  Object.assign(swiper.pagination, {
    render,
    update,
    init,
    destroy
  });
}

/* eslint no-underscore-dangle: "off" */
function Autoplay({
  swiper,
  extendParams,
  on,
  emit
}) {
  let timeout;
  swiper.autoplay = {
    running: false,
    paused: false
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });

  function run() {
    const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    let delay = swiper.params.autoplay.delay;

    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }

    clearTimeout(timeout);
    timeout = nextTick(() => {
      let autoplayResult;

      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit('autoplay');
        } else if (!swiper.isBeginning) {
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          emit('autoplay');
        } else {
          stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit('autoplay');
      } else if (!swiper.isEnd) {
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
        emit('autoplay');
      } else {
        stop();
      }

      if (swiper.params.cssMode && swiper.autoplay.running) run();else if (autoplayResult === false) {
        run();
      }
    }, delay);
  }

  function start() {
    if (typeof timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    emit('autoplayStart');
    run();
    return true;
  }

  function stop() {
    if (!swiper.autoplay.running) return false;
    if (typeof timeout === 'undefined') return false;

    if (timeout) {
      clearTimeout(timeout);
      timeout = undefined;
    }

    swiper.autoplay.running = false;
    emit('autoplayStop');
    return true;
  }

  function pause(speed) {
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (timeout) clearTimeout(timeout);
    swiper.autoplay.paused = true;

    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      run();
    } else {
      ['transitionend', 'webkitTransitionEnd'].forEach(event => {
        swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
      });
    }
  }

  function onVisibilityChange() {
    const document = getDocument();

    if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
      pause();
    }

    if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
      run();
      swiper.autoplay.paused = false;
    }
  }

  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
    if (e.target !== swiper.$wrapperEl[0]) return;
    ['transitionend', 'webkitTransitionEnd'].forEach(event => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
    swiper.autoplay.paused = false;

    if (!swiper.autoplay.running) {
      stop();
    } else {
      run();
    }
  }

  function onMouseEnter() {
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
    } else {
      pause();
    }

    ['transitionend', 'webkitTransitionEnd'].forEach(event => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
  }

  function onMouseLeave() {
    if (swiper.params.autoplay.disableOnInteraction) {
      return;
    }

    swiper.autoplay.paused = false;
    run();
  }

  function attachMouseEvents() {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.$el.on('mouseenter', onMouseEnter);
      swiper.$el.on('mouseleave', onMouseLeave);
    }
  }

  function detachMouseEvents() {
    swiper.$el.off('mouseenter', onMouseEnter);
    swiper.$el.off('mouseleave', onMouseLeave);
  }

  on('init', () => {
    if (swiper.params.autoplay.enabled) {
      start();
      const document = getDocument();
      document.addEventListener('visibilitychange', onVisibilityChange);
      attachMouseEvents();
    }
  });
  on('beforeTransitionStart', (_s, speed, internal) => {
    if (swiper.autoplay.running) {
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.pause(speed);
      } else {
        stop();
      }
    }
  });
  on('sliderFirstMove', () => {
    if (swiper.autoplay.running) {
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
      } else {
        pause();
      }
    }
  });
  on('touchEnd', () => {
    if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
      run();
    }
  });
  on('destroy', () => {
    detachMouseEvents();

    if (swiper.autoplay.running) {
      stop();
    }

    const document = getDocument();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  });
  Object.assign(swiper.autoplay, {
    pause,
    run,
    start,
    stop
  });
}

function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}

function extend(target, src) {
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  Object.keys(src).filter(key => noExtend.indexOf(key) < 0).forEach(key => {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      if (src[key].__swiper__) target[key] = src[key];else extend(target[key], src[key]);
    } else {
      target[key] = src[key];
    }
  });
}

function needsNavigation(props = {}) {
  return props.navigation && typeof props.navigation.nextEl === 'undefined' && typeof props.navigation.prevEl === 'undefined';
}

function needsPagination(props = {}) {
  return props.pagination && typeof props.pagination.el === 'undefined';
}

function needsScrollbar(props = {}) {
  return props.scrollbar && typeof props.scrollbar.el === 'undefined';
}

function uniqueClasses(classNames = '') {
  const classes = classNames.split(' ').map(c => c.trim()).filter(c => !!c);
  const unique = [];
  classes.forEach(c => {
    if (unique.indexOf(c) < 0) unique.push(c);
  });
  return unique.join(' ');
}

/* underscore in name -> watch for changes */
const paramsList = ['modules', 'init', '_direction', 'touchEventsTarget', 'initialSlide', '_speed', 'cssMode', 'updateOnWindowResize', 'resizeObserver', 'nested', 'focusableElements', '_enabled', '_width', '_height', 'preventInteractionOnTransition', 'userAgent', 'url', '_edgeSwipeDetection', '_edgeSwipeThreshold', '_freeMode', '_autoHeight', 'setWrapperSize', 'virtualTranslate', '_effect', 'breakpoints', '_spaceBetween', '_slidesPerView', '_grid', '_slidesPerGroup', '_slidesPerGroupSkip', '_slidesPerGroupAuto', '_centeredSlides', '_centeredSlidesBounds', '_slidesOffsetBefore', '_slidesOffsetAfter', 'normalizeSlideIndex', '_centerInsufficientSlides', '_watchOverflow', 'roundLengths', 'touchRatio', 'touchAngle', 'simulateTouch', '_shortSwipes', '_longSwipes', 'longSwipesRatio', 'longSwipesMs', '_followFinger', 'allowTouchMove', '_threshold', 'touchMoveStopPropagation', 'touchStartPreventDefault', 'touchStartForcePreventDefault', 'touchReleaseOnEdges', 'uniqueNavElements', '_resistance', '_resistanceRatio', '_watchSlidesProgress', '_grabCursor', 'preventClicks', 'preventClicksPropagation', '_slideToClickedSlide', '_preloadImages', 'updateOnImagesReady', '_loop', '_loopAdditionalSlides', '_loopedSlides', '_loopFillGroupWithBlank', 'loopPreventsSlide', '_rewind', '_allowSlidePrev', '_allowSlideNext', '_swipeHandler', '_noSwiping', 'noSwipingClass', 'noSwipingSelector', 'passiveListeners', 'containerModifierClass', 'slideClass', 'slideBlankClass', 'slideActiveClass', 'slideDuplicateActiveClass', 'slideVisibleClass', 'slideDuplicateClass', 'slideNextClass', 'slideDuplicateNextClass', 'slidePrevClass', 'slideDuplicatePrevClass', 'wrapperClass', 'runCallbacksOnInit', 'observer', 'observeParents', 'observeSlideChildren', // modules
'a11y', 'autoplay', '_controller', 'coverflowEffect', 'cubeEffect', 'fadeEffect', 'flipEffect', 'creativeEffect', 'cardsEffect', 'hashNavigation', 'history', 'keyboard', 'lazy', 'mousewheel', '_navigation', '_pagination', 'parallax', '_scrollbar', '_thumbs', 'virtual', 'zoom'];

function getParams(obj = {}) {
  const params = {
    on: {}
  };
  const passedParams = {};
  extend(params, Swiper$1.defaults);
  extend(params, Swiper$1.extendedDefaults);
  params._emitClasses = true;
  params.init = false;
  const rest = {};
  const allowedParams = paramsList.map(key => key.replace(/_/, '')); // Prevent empty Object.keys(obj) array on ios.

  const plainObj = Object.assign({}, obj);
  Object.keys(plainObj).forEach(key => {
    if (typeof obj[key] === 'undefined') return;

    if (allowedParams.indexOf(key) >= 0) {
      if (isObject(obj[key])) {
        params[key] = {};
        passedParams[key] = {};
        extend(params[key], obj[key]);
        extend(passedParams[key], obj[key]);
      } else {
        params[key] = obj[key];
        passedParams[key] = obj[key];
      }
    } else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === 'function') {
      params.on[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
    } else {
      rest[key] = obj[key];
    }
  });
  ['navigation', 'pagination', 'scrollbar'].forEach(key => {
    if (params[key] === true) params[key] = {};
    if (params[key] === false) delete params[key];
  });
  return {
    params,
    passedParams,
    rest
  };
}

function initSwiper(swiperParams) {
  return new Swiper$1(swiperParams);
}

function mountSwiper({
  el,
  nextEl,
  prevEl,
  paginationEl,
  scrollbarEl,
  swiper
}, swiperParams) {
  if (needsNavigation(swiperParams) && nextEl && prevEl) {
    swiper.params.navigation.nextEl = nextEl;
    swiper.originalParams.navigation.nextEl = nextEl;
    swiper.params.navigation.prevEl = prevEl;
    swiper.originalParams.navigation.prevEl = prevEl;
  }

  if (needsPagination(swiperParams) && paginationEl) {
    swiper.params.pagination.el = paginationEl;
    swiper.originalParams.pagination.el = paginationEl;
  }

  if (needsScrollbar(swiperParams) && scrollbarEl) {
    swiper.params.scrollbar.el = scrollbarEl;
    swiper.originalParams.scrollbar.el = scrollbarEl;
  }

  swiper.init(el);
}

function calcLoopedSlides(slides, swiperParams) {
  let slidesPerViewParams = swiperParams.slidesPerView;

  if (swiperParams.breakpoints) {
    const breakpoint = Swiper$1.prototype.getBreakpoint(swiperParams.breakpoints);
    const breakpointOnlyParams = breakpoint in swiperParams.breakpoints ? swiperParams.breakpoints[breakpoint] : undefined;

    if (breakpointOnlyParams && breakpointOnlyParams.slidesPerView) {
      slidesPerViewParams = breakpointOnlyParams.slidesPerView;
    }
  }

  let loopedSlides = Math.ceil(parseFloat(swiperParams.loopedSlides || slidesPerViewParams, 10));
  loopedSlides += swiperParams.loopAdditionalSlides;

  if (loopedSlides > slides.length) {
    loopedSlides = slides.length;
  }

  return loopedSlides;
}

function renderLoop(swiperRef, slides, swiperParams) {
  const modifiedSlides = slides.map((child, index) => {
    if (!child.props) child.props = {};
    child.props.swiperRef = swiperRef;
    child.props['data-swiper-slide-index'] = index;
    return child;
  });

  function duplicateSlide(child, index, position) {
    if (!child.props) child.props = {};
    return h(child.type, { ...child.props,
      key: `${child.key}-duplicate-${index}-${position}`,
      class: `${child.props.className || ''} ${swiperParams.slideDuplicateClass} ${child.props.class || ''}`
    }, child.children);
  }

  if (swiperParams.loopFillGroupWithBlank) {
    const blankSlidesNum = swiperParams.slidesPerGroup - modifiedSlides.length % swiperParams.slidesPerGroup;

    if (blankSlidesNum !== swiperParams.slidesPerGroup) {
      for (let i = 0; i < blankSlidesNum; i += 1) {
        const blankSlide = h('div', {
          class: `${swiperParams.slideClass} ${swiperParams.slideBlankClass}`
        });
        modifiedSlides.push(blankSlide);
      }
    }
  }

  if (swiperParams.slidesPerView === 'auto' && !swiperParams.loopedSlides) {
    swiperParams.loopedSlides = modifiedSlides.length;
  }

  const loopedSlides = calcLoopedSlides(modifiedSlides, swiperParams);
  const prependSlides = [];
  const appendSlides = [];
  modifiedSlides.forEach((child, index) => {
    if (index < loopedSlides) {
      appendSlides.push(duplicateSlide(child, index, 'prepend'));
    }

    if (index < modifiedSlides.length && index >= modifiedSlides.length - loopedSlides) {
      prependSlides.push(duplicateSlide(child, index, 'append'));
    }
  });

  if (swiperRef.value) {
    swiperRef.value.loopedSlides = loopedSlides;
  }

  return [...prependSlides, ...modifiedSlides, ...appendSlides];
}

function getChangedParams(swiperParams, oldParams, children, oldChildren) {
  const keys = [];
  if (!oldParams) return keys;

  const addKey = key => {
    if (keys.indexOf(key) < 0) keys.push(key);
  };

  const oldChildrenKeys = oldChildren.map(child => child.props && child.props.key);
  const childrenKeys = children.map(child => child.props && child.props.key);
  if (oldChildrenKeys.join('') !== childrenKeys.join('')) keys.push('children');
  if (oldChildren.length !== children.length) keys.push('children');
  const watchParams = paramsList.filter(key => key[0] === '_').map(key => key.replace(/_/, ''));
  watchParams.forEach(key => {
    if (key in swiperParams && key in oldParams) {
      if (isObject(swiperParams[key]) && isObject(oldParams[key])) {
        const newKeys = Object.keys(swiperParams[key]);
        const oldKeys = Object.keys(oldParams[key]);

        if (newKeys.length !== oldKeys.length) {
          addKey(key);
        } else {
          newKeys.forEach(newKey => {
            if (swiperParams[key][newKey] !== oldParams[key][newKey]) {
              addKey(key);
            }
          });
          oldKeys.forEach(oldKey => {
            if (swiperParams[key][oldKey] !== oldParams[key][oldKey]) addKey(key);
          });
        }
      } else if (swiperParams[key] !== oldParams[key]) {
        addKey(key);
      }
    }
  });
  return keys;
}

function getChildren(originalSlots = {}, slidesRef, oldSlidesRef) {
  const slides = [];
  const slots = {
    'container-start': [],
    'container-end': [],
    'wrapper-start': [],
    'wrapper-end': []
  };

  const getSlidesFromElements = (els, slotName) => {
    if (!Array.isArray(els)) {
      return;
    }

    els.forEach(vnode => {
      const isFragment = typeof vnode.type === 'symbol';
      if (slotName === 'default') slotName = 'container-end';

      if (isFragment && vnode.children) {
        getSlidesFromElements(vnode.children, 'default');
      } else if (vnode.type && (vnode.type.name === 'SwiperSlide' || vnode.type.name === 'AsyncComponentWrapper')) {
        slides.push(vnode);
      } else if (slots[slotName]) {
        slots[slotName].push(vnode);
      }
    });
  };

  Object.keys(originalSlots).forEach(slotName => {
    const els = originalSlots[slotName]();
    getSlidesFromElements(els, slotName);
  });
  oldSlidesRef.value = slidesRef.value;
  slidesRef.value = slides;
  return {
    slides,
    slots
  };
}

function updateSwiper({
  swiper,
  slides,
  passedParams,
  changedParams,
  nextEl,
  prevEl,
  paginationEl,
  scrollbarEl
}) {
  const updateParams = changedParams.filter(key => key !== 'children' && key !== 'direction');
  const {
    params: currentParams,
    pagination,
    navigation,
    scrollbar,
    virtual,
    thumbs
  } = swiper;
  let needThumbsInit;
  let needControllerInit;
  let needPaginationInit;
  let needScrollbarInit;
  let needNavigationInit;

  if (changedParams.includes('thumbs') && passedParams.thumbs && passedParams.thumbs.swiper && currentParams.thumbs && !currentParams.thumbs.swiper) {
    needThumbsInit = true;
  }

  if (changedParams.includes('controller') && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) {
    needControllerInit = true;
  }

  if (changedParams.includes('pagination') && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination && !pagination.el) {
    needPaginationInit = true;
  }

  if (changedParams.includes('scrollbar') && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) {
    needScrollbarInit = true;
  }

  if (changedParams.includes('navigation') && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) {
    needNavigationInit = true;
  }

  const destroyModule = mod => {
    if (!swiper[mod]) return;
    swiper[mod].destroy();

    if (mod === 'navigation') {
      currentParams[mod].prevEl = undefined;
      currentParams[mod].nextEl = undefined;
      swiper[mod].prevEl = undefined;
      swiper[mod].nextEl = undefined;
    } else {
      currentParams[mod].el = undefined;
      swiper[mod].el = undefined;
    }
  };

  updateParams.forEach(key => {
    if (isObject(currentParams[key]) && isObject(passedParams[key])) {
      extend(currentParams[key], passedParams[key]);
    } else {
      const newValue = passedParams[key];

      if ((newValue === true || newValue === false) && (key === 'navigation' || key === 'pagination' || key === 'scrollbar')) {
        if (newValue === false) {
          destroyModule(key);
        }
      } else {
        currentParams[key] = passedParams[key];
      }
    }
  });

  if (changedParams.includes('children') && virtual && currentParams.virtual.enabled) {
    virtual.slides = slides;
    virtual.update(true);
  } else if (changedParams.includes('children') && swiper.lazy && swiper.params.lazy.enabled) {
    swiper.lazy.load();
  }

  if (needThumbsInit) {
    const initialized = thumbs.init();
    if (initialized) thumbs.update(true);
  }

  if (needControllerInit) {
    swiper.controller.control = currentParams.controller.control;
  }

  if (needPaginationInit) {
    if (paginationEl) currentParams.pagination.el = paginationEl;
    pagination.init();
    pagination.render();
    pagination.update();
  }

  if (needScrollbarInit) {
    if (scrollbarEl) currentParams.scrollbar.el = scrollbarEl;
    scrollbar.init();
    scrollbar.updateSize();
    scrollbar.setTranslate();
  }

  if (needNavigationInit) {
    if (nextEl) currentParams.navigation.nextEl = nextEl;
    if (prevEl) currentParams.navigation.prevEl = prevEl;
    navigation.init();
    navigation.update();
  }

  if (changedParams.includes('allowSlideNext')) {
    swiper.allowSlideNext = passedParams.allowSlideNext;
  }

  if (changedParams.includes('allowSlidePrev')) {
    swiper.allowSlidePrev = passedParams.allowSlidePrev;
  }

  if (changedParams.includes('direction')) {
    swiper.changeDirection(passedParams.direction, false);
  }

  swiper.update();
}

function updateOnVirtualData(swiper) {
  if (!swiper || swiper.destroyed || !swiper.params.virtual || swiper.params.virtual && !swiper.params.virtual.enabled) return;
  swiper.updateSlides();
  swiper.updateProgress();
  swiper.updateSlidesClasses();

  if (swiper.lazy && swiper.params.lazy.enabled) {
    swiper.lazy.load();
  }

  if (swiper.parallax && swiper.params.parallax && swiper.params.parallax.enabled) {
    swiper.parallax.setTranslate();
  }
}

function renderVirtual(swiperRef, slides, virtualData) {
  if (!virtualData) return null;
  const style = swiperRef.value.isHorizontal() ? {
    [swiperRef.value.rtlTranslate ? 'right' : 'left']: `${virtualData.offset}px`
  } : {
    top: `${virtualData.offset}px`
  };
  return slides.filter((slide, index) => index >= virtualData.from && index <= virtualData.to).map(slide => {
    if (!slide.props) slide.props = {};
    if (!slide.props.style) slide.props.style = {};
    slide.props.swiperRef = swiperRef;
    slide.props.style = style;
    return h(slide.type, { ...slide.props
    }, slide.children);
  });
}

const Swiper = {
  name: 'Swiper',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    wrapperTag: {
      type: String,
      default: 'div'
    },
    modules: {
      type: Array,
      default: undefined
    },
    init: {
      type: Boolean,
      default: undefined
    },
    direction: {
      type: String,
      default: undefined
    },
    touchEventsTarget: {
      type: String,
      default: undefined
    },
    initialSlide: {
      type: Number,
      default: undefined
    },
    speed: {
      type: Number,
      default: undefined
    },
    cssMode: {
      type: Boolean,
      default: undefined
    },
    updateOnWindowResize: {
      type: Boolean,
      default: undefined
    },
    resizeObserver: {
      type: Boolean,
      default: undefined
    },
    nested: {
      type: Boolean,
      default: undefined
    },
    focusableElements: {
      type: String,
      default: undefined
    },
    width: {
      type: Number,
      default: undefined
    },
    height: {
      type: Number,
      default: undefined
    },
    preventInteractionOnTransition: {
      type: Boolean,
      default: undefined
    },
    userAgent: {
      type: String,
      default: undefined
    },
    url: {
      type: String,
      default: undefined
    },
    edgeSwipeDetection: {
      type: [Boolean, String],
      default: undefined
    },
    edgeSwipeThreshold: {
      type: Number,
      default: undefined
    },
    autoHeight: {
      type: Boolean,
      default: undefined
    },
    setWrapperSize: {
      type: Boolean,
      default: undefined
    },
    virtualTranslate: {
      type: Boolean,
      default: undefined
    },
    effect: {
      type: String,
      default: undefined
    },
    breakpoints: {
      type: Object,
      default: undefined
    },
    spaceBetween: {
      type: Number,
      default: undefined
    },
    slidesPerView: {
      type: [Number, String],
      default: undefined
    },
    slidesPerGroup: {
      type: Number,
      default: undefined
    },
    slidesPerGroupSkip: {
      type: Number,
      default: undefined
    },
    slidesPerGroupAuto: {
      type: Boolean,
      default: undefined
    },
    centeredSlides: {
      type: Boolean,
      default: undefined
    },
    centeredSlidesBounds: {
      type: Boolean,
      default: undefined
    },
    slidesOffsetBefore: {
      type: Number,
      default: undefined
    },
    slidesOffsetAfter: {
      type: Number,
      default: undefined
    },
    normalizeSlideIndex: {
      type: Boolean,
      default: undefined
    },
    centerInsufficientSlides: {
      type: Boolean,
      default: undefined
    },
    watchOverflow: {
      type: Boolean,
      default: undefined
    },
    roundLengths: {
      type: Boolean,
      default: undefined
    },
    touchRatio: {
      type: Number,
      default: undefined
    },
    touchAngle: {
      type: Number,
      default: undefined
    },
    simulateTouch: {
      type: Boolean,
      default: undefined
    },
    shortSwipes: {
      type: Boolean,
      default: undefined
    },
    longSwipes: {
      type: Boolean,
      default: undefined
    },
    longSwipesRatio: {
      type: Number,
      default: undefined
    },
    longSwipesMs: {
      type: Number,
      default: undefined
    },
    followFinger: {
      type: Boolean,
      default: undefined
    },
    allowTouchMove: {
      type: Boolean,
      default: undefined
    },
    threshold: {
      type: Number,
      default: undefined
    },
    touchMoveStopPropagation: {
      type: Boolean,
      default: undefined
    },
    touchStartPreventDefault: {
      type: Boolean,
      default: undefined
    },
    touchStartForcePreventDefault: {
      type: Boolean,
      default: undefined
    },
    touchReleaseOnEdges: {
      type: Boolean,
      default: undefined
    },
    uniqueNavElements: {
      type: Boolean,
      default: undefined
    },
    resistance: {
      type: Boolean,
      default: undefined
    },
    resistanceRatio: {
      type: Number,
      default: undefined
    },
    watchSlidesProgress: {
      type: Boolean,
      default: undefined
    },
    grabCursor: {
      type: Boolean,
      default: undefined
    },
    preventClicks: {
      type: Boolean,
      default: undefined
    },
    preventClicksPropagation: {
      type: Boolean,
      default: undefined
    },
    slideToClickedSlide: {
      type: Boolean,
      default: undefined
    },
    preloadImages: {
      type: Boolean,
      default: undefined
    },
    updateOnImagesReady: {
      type: Boolean,
      default: undefined
    },
    loop: {
      type: Boolean,
      default: undefined
    },
    loopAdditionalSlides: {
      type: Number,
      default: undefined
    },
    loopedSlides: {
      type: Number,
      default: undefined
    },
    loopFillGroupWithBlank: {
      type: Boolean,
      default: undefined
    },
    loopPreventsSlide: {
      type: Boolean,
      default: undefined
    },
    rewind: {
      type: Boolean,
      default: undefined
    },
    allowSlidePrev: {
      type: Boolean,
      default: undefined
    },
    allowSlideNext: {
      type: Boolean,
      default: undefined
    },
    swipeHandler: {
      type: Boolean,
      default: undefined
    },
    noSwiping: {
      type: Boolean,
      default: undefined
    },
    noSwipingClass: {
      type: String,
      default: undefined
    },
    noSwipingSelector: {
      type: String,
      default: undefined
    },
    passiveListeners: {
      type: Boolean,
      default: undefined
    },
    containerModifierClass: {
      type: String,
      default: undefined
    },
    slideClass: {
      type: String,
      default: undefined
    },
    slideBlankClass: {
      type: String,
      default: undefined
    },
    slideActiveClass: {
      type: String,
      default: undefined
    },
    slideDuplicateActiveClass: {
      type: String,
      default: undefined
    },
    slideVisibleClass: {
      type: String,
      default: undefined
    },
    slideDuplicateClass: {
      type: String,
      default: undefined
    },
    slideNextClass: {
      type: String,
      default: undefined
    },
    slideDuplicateNextClass: {
      type: String,
      default: undefined
    },
    slidePrevClass: {
      type: String,
      default: undefined
    },
    slideDuplicatePrevClass: {
      type: String,
      default: undefined
    },
    wrapperClass: {
      type: String,
      default: undefined
    },
    runCallbacksOnInit: {
      type: Boolean,
      default: undefined
    },
    observer: {
      type: Boolean,
      default: undefined
    },
    observeParents: {
      type: Boolean,
      default: undefined
    },
    observeSlideChildren: {
      type: Boolean,
      default: undefined
    },
    a11y: {
      type: [Boolean, Object],
      default: undefined
    },
    autoplay: {
      type: [Boolean, Object],
      default: undefined
    },
    controller: {
      type: Object,
      default: undefined
    },
    coverflowEffect: {
      type: Object,
      default: undefined
    },
    cubeEffect: {
      type: Object,
      default: undefined
    },
    fadeEffect: {
      type: Object,
      default: undefined
    },
    flipEffect: {
      type: Object,
      default: undefined
    },
    creativeEffect: {
      type: Object,
      default: undefined
    },
    cardsEffect: {
      type: Object,
      default: undefined
    },
    hashNavigation: {
      type: [Boolean, Object],
      default: undefined
    },
    history: {
      type: [Boolean, Object],
      default: undefined
    },
    keyboard: {
      type: [Boolean, Object],
      default: undefined
    },
    lazy: {
      type: [Boolean, Object],
      default: undefined
    },
    mousewheel: {
      type: [Boolean, Object],
      default: undefined
    },
    navigation: {
      type: [Boolean, Object],
      default: undefined
    },
    pagination: {
      type: [Boolean, Object],
      default: undefined
    },
    parallax: {
      type: [Boolean, Object],
      default: undefined
    },
    scrollbar: {
      type: [Boolean, Object],
      default: undefined
    },
    thumbs: {
      type: Object,
      default: undefined
    },
    virtual: {
      type: [Boolean, Object],
      default: undefined
    },
    zoom: {
      type: [Boolean, Object],
      default: undefined
    },
    grid: {
      type: [Object],
      default: undefined
    },
    freeMode: {
      type: [Boolean, Object],
      default: undefined
    }
  },
  emits: ['_beforeBreakpoint', '_containerClasses', '_slideClass', '_slideClasses', '_swiper', 'activeIndexChange', 'afterInit', 'autoplay', 'autoplayStart', 'autoplayStop', 'beforeDestroy', 'beforeInit', 'beforeLoopFix', 'beforeResize', 'beforeSlideChangeStart', 'beforeTransitionStart', 'breakpoint', 'changeDirection', 'click', 'disable', 'doubleTap', 'doubleClick', 'destroy', 'enable', 'fromEdge', 'hashChange', 'hashSet', 'imagesReady', 'init', 'keyPress', 'lazyImageLoad', 'lazyImageReady', 'lock', 'loopFix', 'momentumBounce', 'navigationHide', 'navigationShow', 'observerUpdate', 'orientationchange', 'paginationHide', 'paginationRender', 'paginationShow', 'paginationUpdate', 'progress', 'reachBeginning', 'reachEnd', 'realIndexChange', 'resize', 'scroll', 'scrollbarDragEnd', 'scrollbarDragMove', 'scrollbarDragStart', 'setTransition', 'setTranslate', 'slideChange', 'slideChangeTransitionEnd', 'slideChangeTransitionStart', 'slideNextTransitionEnd', 'slideNextTransitionStart', 'slidePrevTransitionEnd', 'slidePrevTransitionStart', 'slideResetTransitionStart', 'slideResetTransitionEnd', 'sliderMove', 'sliderFirstMove', 'slidesLengthChange', 'slidesGridLengthChange', 'snapGridLengthChange', 'snapIndexChange', 'swiper', 'tap', 'toEdge', 'touchEnd', 'touchMove', 'touchMoveOpposite', 'touchStart', 'transitionEnd', 'transitionStart', 'unlock', 'update', 'zoomChange'],

  setup(props, {
    slots: originalSlots,
    emit
  }) {
    const {
      tag: Tag,
      wrapperTag: WrapperTag
    } = props;
    const containerClasses = ref('swiper');
    const virtualData = ref(null);
    const breakpointChanged = ref(false);
    const initializedRef = ref(false);
    const swiperElRef = ref(null);
    const swiperRef = ref(null);
    const oldPassedParamsRef = ref(null);
    const slidesRef = {
      value: []
    };
    const oldSlidesRef = {
      value: []
    };
    const nextElRef = ref(null);
    const prevElRef = ref(null);
    const paginationElRef = ref(null);
    const scrollbarElRef = ref(null);
    const {
      params: swiperParams,
      passedParams
    } = getParams(props);
    getChildren(originalSlots, slidesRef, oldSlidesRef);
    oldPassedParamsRef.value = passedParams;
    oldSlidesRef.value = slidesRef.value;

    const onBeforeBreakpoint = () => {
      getChildren(originalSlots, slidesRef, oldSlidesRef);
      breakpointChanged.value = true;
    };

    swiperParams.onAny = (event, ...args) => {
      emit(event, ...args);
    };

    Object.assign(swiperParams.on, {
      _beforeBreakpoint: onBeforeBreakpoint,

      _containerClasses(swiper, classes) {
        containerClasses.value = classes;
      }

    }); // init Swiper

    swiperRef.value = initSwiper(swiperParams);

    swiperRef.value.loopCreate = () => {};

    swiperRef.value.loopDestroy = () => {};

    if (swiperParams.loop) {
      swiperRef.value.loopedSlides = calcLoopedSlides(slidesRef.value, swiperParams);
    }

    if (swiperRef.value.virtual && swiperRef.value.params.virtual.enabled) {
      swiperRef.value.virtual.slides = slidesRef.value;
      const extendWith = {
        cache: false,
        slides: slidesRef.value,
        renderExternal: data => {
          virtualData.value = data;
        },
        renderExternalUpdate: false
      };
      extend(swiperRef.value.params.virtual, extendWith);
      extend(swiperRef.value.originalParams.virtual, extendWith);
    }

    onUpdated(() => {
      // set initialized flag
      if (!initializedRef.value && swiperRef.value) {
        swiperRef.value.emitSlidesClasses();
        initializedRef.value = true;
      } // watch for params change


      const {
        passedParams: newPassedParams
      } = getParams(props);
      const changedParams = getChangedParams(newPassedParams, oldPassedParamsRef.value, slidesRef.value, oldSlidesRef.value);
      oldPassedParamsRef.value = newPassedParams;

      if ((changedParams.length || breakpointChanged.value) && swiperRef.value && !swiperRef.value.destroyed) {
        updateSwiper({
          swiper: swiperRef.value,
          slides: slidesRef.value,
          passedParams: newPassedParams,
          changedParams,
          nextEl: nextElRef.value,
          prevEl: prevElRef.value,
          scrollbarEl: scrollbarElRef.value,
          paginationEl: paginationElRef.value
        });
      }

      breakpointChanged.value = false;
    }); // update on virtual update

    watch(virtualData, () => {
      nextTick$1(() => {
        updateOnVirtualData(swiperRef.value);
      });
    }); // mount swiper

    onMounted(() => {
      if (!swiperElRef.value) return;
      mountSwiper({
        el: swiperElRef.value,
        nextEl: nextElRef.value,
        prevEl: prevElRef.value,
        paginationEl: paginationElRef.value,
        scrollbarEl: scrollbarElRef.value,
        swiper: swiperRef.value
      }, swiperParams);
      emit('swiper', swiperRef.value);
    });
    onBeforeUnmount(() => {
      if (swiperRef.value && !swiperRef.value.destroyed) {
        swiperRef.value.destroy(true, false);
      }
    }); // bypass swiper instance to slides

    function renderSlides(slides) {
      if (swiperParams.virtual) {
        return renderVirtual(swiperRef, slides, virtualData.value);
      }

      if (!swiperParams.loop || swiperRef.value && swiperRef.value.destroyed) {
        slides.forEach(slide => {
          if (!slide.props) slide.props = {};
          slide.props.swiperRef = swiperRef;
        });
        return slides;
      }

      return renderLoop(swiperRef, slides, swiperParams);
    }

    return () => {
      const {
        slides,
        slots
      } = getChildren(originalSlots, slidesRef, oldSlidesRef);
      return h(Tag, {
        ref: swiperElRef,
        class: uniqueClasses(containerClasses.value)
      }, [slots['container-start'], needsNavigation(props) && [h('div', {
        ref: prevElRef,
        class: 'swiper-button-prev'
      }), h('div', {
        ref: nextElRef,
        class: 'swiper-button-next'
      })], needsScrollbar(props) && h('div', {
        ref: scrollbarElRef,
        class: 'swiper-scrollbar'
      }), needsPagination(props) && h('div', {
        ref: paginationElRef,
        class: 'swiper-pagination'
      }), h(WrapperTag, {
        class: 'swiper-wrapper'
      }, [slots['wrapper-start'], renderSlides(slides), slots['wrapper-end']]), slots['container-end']]);
    };
  }

};

const SwiperSlide = {
  name: 'SwiperSlide',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    swiperRef: {
      type: Object,
      required: false
    },
    zoom: {
      type: Boolean,
      default: undefined
    },
    virtualIndex: {
      type: [String, Number],
      default: undefined
    }
  },

  setup(props, {
    slots
  }) {
    let eventAttached = false;
    const {
      swiperRef
    } = props;
    const slideElRef = ref(null);
    const slideClasses = ref('swiper-slide');

    function updateClasses(swiper, el, classNames) {
      if (el === slideElRef.value) {
        slideClasses.value = classNames;
      }
    }

    onMounted(() => {
      if (!swiperRef.value) return;
      swiperRef.value.on('_slideClass', updateClasses);
      eventAttached = true;
    });
    onBeforeUpdate(() => {
      if (eventAttached || !swiperRef || !swiperRef.value) return;
      swiperRef.value.on('_slideClass', updateClasses);
      eventAttached = true;
    });
    onUpdated(() => {
      if (!slideElRef.value || !swiperRef || !swiperRef.value) return;

      if (swiperRef.value.destroyed) {
        if (slideClasses.value !== 'swiper-slide') {
          slideClasses.value = 'swiper-slide';
        }
      }
    });
    onBeforeUnmount(() => {
      if (!swiperRef || !swiperRef.value) return;
      swiperRef.value.off('_slideClass', updateClasses);
    });
    const slideData = computed(() => ({
      isActive: slideClasses.value.indexOf('swiper-slide-active') >= 0 || slideClasses.value.indexOf('swiper-slide-duplicate-active') >= 0,
      isVisible: slideClasses.value.indexOf('swiper-slide-visible') >= 0,
      isDuplicate: slideClasses.value.indexOf('swiper-slide-duplicate') >= 0,
      isPrev: slideClasses.value.indexOf('swiper-slide-prev') >= 0 || slideClasses.value.indexOf('swiper-slide-duplicate-prev') >= 0,
      isNext: slideClasses.value.indexOf('swiper-slide-next') >= 0 || slideClasses.value.indexOf('swiper-slide-duplicate-next') >= 0
    }));
    return () => {
      return h(props.tag, {
        class: uniqueClasses(`${slideClasses.value}`),
        ref: slideElRef,
        'data-swiper-slide-index': props.virtualIndex
      }, props.zoom ? h('div', {
        class: 'swiper-zoom-container',
        'data-swiper-zoom': typeof props.zoom === 'number' ? props.zoom : undefined
      }, slots.default && slots.default(slideData.value)) : slots.default && slots.default(slideData.value));
    };
  }

};

var swiper_min = '';

var navigation_min = '';

var pagination_min = '';

var scrollbar_min = '';

var IndexSkeleton_scss_vue_type_style_index_0_src_4e89b816_scoped_true_lang = '';

const _withScopeId$1 = (n) => (pushScopeId("data-v-4e89b816"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "index" };
const _hoisted_2$1 = { class: "index-banner" };
const _hoisted_3$1 = { class: "index-banner-warp flex flex-align-center" };
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "bootom-bg" }, null, -1));
const _hoisted_5$1 = { class: "left-warp flex3" };
const _hoisted_6$1 = { class: "title" };
const _hoisted_7$1 = { class: "drsc" };
const _hoisted_8$1 = { class: "right-warp flex2" };
const _hoisted_9$1 = { class: "cont flex flex-align-center" };
const _hoisted_10$1 = { class: "flex1" };
const _hoisted_11$1 = { class: "name" };
const _hoisted_12$1 = { class: "metaId" };
const _hoisted_13$1 = { class: "module-item container" };
const _hoisted_14$1 = { class: "module-item-name" };
const _hoisted_15$1 = { class: "module-item-cont" };
const _hoisted_16$1 = { class: "hot-topic-list" };
const _hoisted_17$1 = { class: "module-item container" };
const _hoisted_18$1 = { class: "module-item-name" };
const _hoisted_19$1 = { class: "module-item-cont" };
const _hoisted_20$1 = { class: "new-topic-list" };
const _hoisted_21$1 = { class: "module-item container" };
const _hoisted_22$1 = { class: "module-item-name" };
const _hoisted_23$1 = { class: "module-item-cont" };
const _hoisted_24$1 = { class: "like-topic-list" };
const _hoisted_25$1 = { class: "module-item container" };
const _hoisted_26$1 = { class: "module-item-name" };
const _hoisted_27$1 = { class: "module-item-cont" };
const _hoisted_28$1 = { class: "nft-intro-list" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    loading: { type: Boolean, required: true }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_ElSkeletonItem = ElSkeletonItem;
      const _component_router_link = resolveComponent("router-link");
      const _component_ElSkeleton = ElSkeleton;
      return openBlock(), createBlock(_component_ElSkeleton, {
        loading: __props.loading,
        animated: ""
      }, {
        template: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("div", _hoisted_2$1, [
              createBaseVNode("div", _hoisted_3$1, [
                _hoisted_4$1,
                createBaseVNode("div", _hoisted_5$1, [
                  createBaseVNode("div", _hoisted_6$1, [
                    createVNode(_component_ElSkeletonItem, { variant: "p" })
                  ]),
                  createBaseVNode("div", _hoisted_7$1, [
                    createVNode(_component_ElSkeletonItem, { variant: "p" }),
                    createVNode(_component_ElSkeletonItem, { variant: "p" }),
                    createVNode(_component_ElSkeletonItem, { variant: "p" }),
                    createVNode(_component_ElSkeletonItem, { variant: "p" }),
                    createVNode(_component_ElSkeletonItem, { variant: "p" })
                  ]),
                  createVNode(_component_router_link, { to: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_ElSkeletonItem, { variant: "button" })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_8$1, [
                  createVNode(_component_ElSkeletonItem, { variant: "image" }),
                  createBaseVNode("div", _hoisted_9$1, [
                    createVNode(_component_ElSkeletonItem, { variant: "circle" }),
                    createBaseVNode("div", _hoisted_10$1, [
                      createBaseVNode("div", _hoisted_11$1, [
                        createVNode(_component_ElSkeletonItem, { variant: "text" })
                      ]),
                      createBaseVNode("div", _hoisted_12$1, [
                        createVNode(_component_ElSkeletonItem, { variant: "text" })
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            createCommentVNode(" \u70ED\u95E8\u4E13\u8F91 \u{1F525} "),
            createBaseVNode("div", _hoisted_13$1, [
              createBaseVNode("div", _hoisted_14$1, [
                createVNode(_component_ElSkeletonItem, { variant: "text" })
              ]),
              createBaseVNode("div", _hoisted_15$1, [
                createBaseVNode("div", _hoisted_16$1, [
                  createVNode(_component_ElSkeletonItem, { variant: "rect" }),
                  createVNode(_component_ElSkeletonItem, { variant: "rect" }),
                  createVNode(_component_ElSkeletonItem, { variant: "rect" })
                ])
              ])
            ]),
            createCommentVNode(" \u6700\u65B0\u4E13\u8F91 \u{1F195} "),
            createBaseVNode("div", _hoisted_17$1, [
              createBaseVNode("div", _hoisted_18$1, [
                createVNode(_component_ElSkeletonItem, { variant: "text" })
              ]),
              createBaseVNode("div", _hoisted_19$1, [
                createBaseVNode("div", _hoisted_20$1, [
                  createVNode(_component_ElSkeletonItem, { variant: "rect" }),
                  createVNode(_component_ElSkeletonItem, { variant: "rect" })
                ])
              ])
            ]),
            createCommentVNode(" \u6700\u591A\u70B9\u8D5E \u{1F44D} "),
            createBaseVNode("div", _hoisted_21$1, [
              createBaseVNode("div", _hoisted_22$1, [
                createVNode(_component_ElSkeletonItem, { variant: "text" })
              ]),
              createBaseVNode("div", _hoisted_23$1, [
                createBaseVNode("div", _hoisted_24$1, [
                  createVNode(_component_ElSkeletonItem, { variant: "rect" }),
                  createVNode(_component_ElSkeletonItem, { variant: "rect" }),
                  createVNode(_component_ElSkeletonItem, { variant: "rect" })
                ])
              ])
            ]),
            createCommentVNode(" \u524D\u6240\u672A\u6709\u7684\u529F\u80FD\u6027NFT\u4F53\u9A8C "),
            createBaseVNode("div", _hoisted_25$1, [
              createBaseVNode("div", _hoisted_26$1, [
                createVNode(_component_ElSkeletonItem, { variant: "text" })
              ]),
              createBaseVNode("div", _hoisted_27$1, [
                createBaseVNode("div", _hoisted_28$1, [
                  createVNode(_component_ElSkeletonItem, {
                    class: "nft-intro-item",
                    variant: "rect"
                  }),
                  createVNode(_component_ElSkeletonItem, {
                    class: "nft-intro-item",
                    variant: "rect"
                  }),
                  createVNode(_component_ElSkeletonItem, {
                    class: "nft-intro-item",
                    variant: "rect"
                  }),
                  createVNode(_component_ElSkeletonItem, {
                    class: "nft-intro-item",
                    variant: "rect"
                  })
                ])
              ])
            ])
          ])
        ]),
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        _: 3
      }, 8, ["loading"]);
    };
  }
});
var IndexSkeletonVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4e89b816"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/IndexSkeleton.vue"]]);

var RightIcon = "/assets/home_icon_ins.9e6e033f.svg";

var Index_scss_vue_type_style_index_0_src_23543608_scoped_true_lang = '';

const _withScopeId = (n) => (pushScopeId("data-v-23543608"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "index" };
const _hoisted_2 = { class: "index-banner-out-warp" };
const _hoisted_3 = { class: "index-banner" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "bg",
  src: _imports_0
}, null, -1));
const _hoisted_5 = { class: "index-banner-warp" };
const _hoisted_6 = { class: "container flex flex-align-center" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "bootom-bg" }, null, -1));
const _hoisted_8 = { class: "left-warp flex1" };
const _hoisted_9 = { class: "title" };
const _hoisted_10 = { class: "drsc" };
const _hoisted_11 = ["onClick"];
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "dot" }, null, -1));
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "dot" }, null, -1));
const _hoisted_14 = ["onClick"];
const _hoisted_15 = { class: "right-warp" };
const _hoisted_16 = ["onClick"];
const _hoisted_17 = { class: "cover" };
const _hoisted_18 = ["src"];
const _hoisted_19 = { class: "cont flex flex-align-center" };
const _hoisted_20 = { class: "avatar" };
const _hoisted_21 = { class: "flex1" };
const _hoisted_22 = { class: "name" };
const _hoisted_23 = { class: "metaId" };
const _hoisted_24 = { class: "module-item background-white" };
const _hoisted_25 = { class: "container" };
const _hoisted_26 = { class: "module-item-name" };
const _hoisted_27 = { class: "module-item-cont" };
const _hoisted_28 = { class: "swiper-wrap" };
const _hoisted_29 = ["onClick", "to"];
const _hoisted_30 = { class: "cover" };
const _hoisted_31 = ["src", "alt"];
const _hoisted_32 = { class: "cont" };
const _hoisted_33 = { class: "user" };
const _hoisted_34 = ["onClick"];
const _hoisted_35 = { class: "" };
const _hoisted_36 = ["src"];
const _hoisted_37 = ["onClick"];
const _hoisted_38 = { class: "genesis" };
const _hoisted_39 = { class: "name" };
const _hoisted_40 = { class: "intro" };
const _hoisted_41 = { class: "swiper-button-left swiper-button-left-hot" };
const _hoisted_42 = ["src"];
const _hoisted_43 = { class: "swiper-button-right swiper-button-right-hot" };
const _hoisted_44 = ["src"];
const _hoisted_45 = { class: "module-item" };
const _hoisted_46 = { class: "container" };
const _hoisted_47 = { class: "module-item-name" };
const _hoisted_48 = { class: "module-item-cont" };
const _hoisted_49 = { class: "swiper-wrap" };
const _hoisted_50 = ["onClick"];
const _hoisted_51 = { class: "top flex flex-align-center" };
const _hoisted_52 = { class: "user flex1 flex flex-align-center flex-pack-center" };
const _hoisted_53 = { class: "cont" };
const _hoisted_54 = ["onClick"];
const _hoisted_55 = { class: "" };
const _hoisted_56 = ["src"];
const _hoisted_57 = ["onClick"];
const _hoisted_58 = { class: "statiscs-list flex flex-align-center" };
const _hoisted_59 = { class: "flex flex1" };
const _hoisted_60 = { class: "statiscs-item flex1" };
const _hoisted_61 = { class: "number" };
const _hoisted_62 = { class: "label" };
const _hoisted_63 = { class: "statiscs-item flex1" };
const _hoisted_64 = { class: "number" };
const _hoisted_65 = { class: "label" };
const _hoisted_66 = { class: "flex flex1 static-after-group" };
const _hoisted_67 = { class: "statiscs-item flex1" };
const _hoisted_68 = { class: "number flex flex-align-center flex-pack-center" };
const _hoisted_69 = { key: 0 };
const _hoisted_70 = ["src"];
const _hoisted_71 = /* @__PURE__ */ createTextVNode("--");
const _hoisted_72 = { class: "label" };
const _hoisted_73 = { class: "statiscs-item flex1" };
const _hoisted_74 = { class: "number flex flex-align-center flex-pack-center" };
const _hoisted_75 = { key: 0 };
const _hoisted_76 = ["src"];
const _hoisted_77 = /* @__PURE__ */ createTextVNode("--");
const _hoisted_78 = { class: "label" };
const _hoisted_79 = { class: "list" };
const _hoisted_80 = ["onClick"];
const _hoisted_81 = ["to"];
const _hoisted_82 = ["src", "alt", "title"];
const _hoisted_83 = { class: "swiper-button-top swiper-button-left swiper-button-left-new" };
const _hoisted_84 = ["src"];
const _hoisted_85 = { class: "swiper-button-top swiper-button-right swiper-button-right-new" };
const _hoisted_86 = ["src"];
const _hoisted_87 = { class: "module-item background-white" };
const _hoisted_88 = { class: "container" };
const _hoisted_89 = { class: "module-item-name" };
const _hoisted_90 = { class: "module-item-cont" };
const _hoisted_91 = { class: "swiper-wrap" };
const _hoisted_92 = ["onClick"];
const _hoisted_93 = { class: "cover" };
const _hoisted_94 = ["src"];
const _hoisted_95 = { class: "cont" };
const _hoisted_96 = { class: "intro" };
const _hoisted_97 = { class: "name flex1" };
const _hoisted_98 = { class: "cont" };
const _hoisted_99 = { class: "user flex flex-align-center" };
const _hoisted_100 = { class: "content" };
const _hoisted_101 = ["onClick"];
const _hoisted_102 = { class: "" };
const _hoisted_103 = ["src"];
const _hoisted_104 = ["onClick"];
const _hoisted_105 = { class: "swiper-button-left swiper-button-left-like" };
const _hoisted_106 = ["src"];
const _hoisted_107 = { class: "swiper-button-right swiper-button-right-like" };
const _hoisted_108 = ["src"];
const _hoisted_109 = { class: "module-item" };
const _hoisted_110 = { class: "container" };
const _hoisted_111 = { class: "module-item-name" };
const _hoisted_112 = { class: "module-item-cont" };
const _hoisted_113 = { class: "nft-intro-list flex flex-pack-around" };
const _hoisted_114 = { class: "nft-intro-first-group flex flex1 flex-pack-around" };
const _hoisted_115 = { class: "nft-intro-item" };
const _hoisted_116 = { class: "nft-intro-item-wrap" };
const _hoisted_117 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "nft-item-img-wrap" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_1,
    class: "cover img_1"
  })
], -1));
const _hoisted_118 = { class: "cont cont-wrap" };
const _hoisted_119 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "name" }, "NFT", -1));
const _hoisted_120 = { class: "drsc" };
const _hoisted_121 = { class: "nft-intro-item" };
const _hoisted_122 = { class: "nft-intro-item-wrap" };
const _hoisted_123 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "nft-item-img-wrap" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_2,
    class: "cover img_2"
  })
], -1));
const _hoisted_124 = { class: "cont cont-wrap" };
const _hoisted_125 = { class: "name" };
const _hoisted_126 = { class: "drsc" };
const _hoisted_127 = { class: "flex flex1 flex-pack-around" };
const _hoisted_128 = { class: "nft-intro-item" };
const _hoisted_129 = { class: "nft-intro-item-wrap" };
const _hoisted_130 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "nft-item-img-wrap" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_3,
    class: "cover img_3"
  })
], -1));
const _hoisted_131 = { class: "cont cont-wrap" };
const _hoisted_132 = { class: "name" };
const _hoisted_133 = { class: "drsc" };
const _hoisted_134 = { class: "nft-intro-item" };
const _hoisted_135 = { class: "nft-intro-item-wrap" };
const _hoisted_136 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "nft-item-img-wrap" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_4,
    class: "cover img_4"
  })
], -1));
const _hoisted_137 = { class: "cont cont-wrap" };
const _hoisted_138 = { class: "name" };
const _hoisted_139 = { class: "drsc" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const i18n = useI18n();
    const router = useRouter();
    const store = useStore();
    const hotTopicSlidesPerView = window.document.documentElement.clientWidth >= 750 ? 3 : 1;
    const newTopicSlidesPerView = window.document.documentElement.clientWidth >= 750 ? 2 : 1;
    const banners = reactive([]);
    const hotTopics = reactive([]);
    const hotNFTs = reactive([]);
    const newTopics = reactive([]);
    const isSkeleton = ref(true);
    const unitName = computed(() => {
      return UnitName;
    });
    const bannerWhiteList = ref("MetaBot Avatar");
    const metabotAvatarWhiteList = ref("\u521B\u4E16MetaBot Avatar");
    const buyBlindBoxUrl = ref("/blindbox/detail");
    const tempNewTopicList = computed(() => {
      if (store.state.currentPrice === UnitName.BSV) {
        newTopics.map((item) => {
          item[i18n.locale.value].issueCurrentPrice = converterBSV(item[i18n.locale.value].issuePrice);
          item[i18n.locale.value].floorCurrentPrice = converterBSV(item[i18n.locale.value].floorPrice);
        });
      } else {
        newTopics.map((item) => {
          item[i18n.locale.value].issueCurrentPrice = converterCNY(item[i18n.locale.value].issuePrice);
          item[i18n.locale.value].floorCurrentPrice = converterCNY(item[i18n.locale.value].floorPrice);
        });
      }
      return newTopics;
    });
    function toCompose() {
      if (store.state.isApp) {
        window.open(`${"https://www.metabot.world/remint/avatar"}`, "_self");
      } else {
        window.open(`${"https://www.metabot.world/remint/avatar"}`, "_blank");
      }
    }
    function toDetail(genesis, codehash, tokenIndex) {
      router.push({
        name: "detail",
        params: {
          genesisId: genesis,
          codehash,
          tokenIndex
        }
      });
    }
    function getDatas() {
      return new Promise(async (reslove) => {
        const res = await Promise.all([
          GetMarketBanners(),
          GetMarketHotTopics(),
          GetMarketHotNTFs(),
          GetMarketNewTopics()
        ]);
        if (res) {
          console.log("xzxzx222asasa", res);
          if (res[0].code === 0) {
            banners.push(...res[0].data.result);
            res[0].data.result.map((item) => {
              if (item[i18n.locale.value].title === "MetaBot Avatar") {
                store.commit(Mutation.GetLimitedTime, item[i18n.locale.value].limitTime);
              }
            });
          }
          if (res[1].code === 0) {
            hotTopics.push(...res[1].data.result);
          }
          if (res[2].code === 0) {
            hotNFTs.push(...res[2].data.result);
          }
          if (res[3].code === 0) {
            console.log("xzxz222asas", res[3].data.result);
            newTopics.push(...res[3].data.result);
          }
        }
        isSkeleton.value = false;
        reslove();
      });
    }
    function buyBlindBox(url) {
      router.push(url);
    }
    function toPage(path) {
      if (path.indexOf("https") !== -1 || path.indexOf("http") !== -1) {
        window.open(path, "_blank");
      } else {
        if (path === "/blindbox/detail") {
          path = "/collection/detail/MetaBotAvatar/974e2977d5c9446f7f48fd82c9ea51f82749b9ef7c00d26b73bc450d167d5f31";
        }
        router.push(path);
      }
    }
    function transformSlotProps(props) {
      const formattedProps = {};
      Object.entries(props).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value);
      });
      return formattedProps;
    }
    getDatas();
    return (_ctx, _cache) => {
      const _component_ElButton = ElButton;
      const _component_UserAvatar = resolveComponent("UserAvatar");
      return openBlock(), createBlock(IndexSkeletonVue, { loading: isSkeleton.value }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createCommentVNode(" banner "),
            createBaseVNode("div", _hoisted_2, [
              createVNode(unref(Swiper), {
                modules: [unref(Autoplay), unref(Pagination)],
                pagination: { clickable: true },
                autoplay: { delay: 5e3 },
                loop: true,
                class: "hot-topic-list"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(banners), (banner, index) => {
                    return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_3, [
                          _hoisted_4,
                          createBaseVNode("div", _hoisted_5, [
                            createBaseVNode("div", _hoisted_6, [
                              _hoisted_7,
                              createBaseVNode("div", _hoisted_8, [
                                createBaseVNode("div", _hoisted_9, toDisplayString(banner[unref(i18n).locale.value].title), 1),
                                createBaseVNode("div", _hoisted_10, toDisplayString(banner[unref(i18n).locale.value].content), 1),
                                createCommentVNode(" \u62CD\u5356 \u5012\u8BA1\u65F6 "),
                                createBaseVNode("a", {
                                  onClick: ($event) => toPage(banner[unref(i18n).locale.value].url)
                                }, [
                                  createBaseVNode("div", null, [
                                    createVNode(_component_ElButton, {
                                      class: "collcetionBtn",
                                      type: "primary"
                                    }, {
                                      default: withCtx(() => [
                                        banner[unref(i18n).locale.value].limitTime && banner[unref(i18n).locale.value].title !== bannerWhiteList.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                          createTextVNode(toDisplayString(_ctx.$t("Comingsoon")) + " ", 1),
                                          createVNode(unref(index$1), {
                                            class: "countdown",
                                            time: banner[unref(i18n).locale.value].limitTime - new Date().getTime(),
                                            transform: transformSlotProps,
                                            onEnd: () => banner[unref(i18n).locale.value].limitTime = 0
                                          }, {
                                            default: withCtx(({ days, hours, minutes, seconds }) => [
                                              _hoisted_12,
                                              createBaseVNode("span", null, toDisplayString(parseInt(hours) + parseInt(days) * 24) + ":" + toDisplayString(minutes) + ":" + toDisplayString(seconds), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["time", "onEnd"])
                                        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                          createTextVNode(toDisplayString(_ctx.$t("lookTopic")), 1)
                                        ], 2112))
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ], 8, _hoisted_11),
                                banner[unref(i18n).locale.value].title === bannerWhiteList.value ? (openBlock(), createElementBlock("a", {
                                  key: 0,
                                  class: "metabotavatarLink",
                                  onClick: _cache[0] || (_cache[0] = ($event) => buyBlindBox(buyBlindBoxUrl.value))
                                }, [
                                  createBaseVNode("div", null, [
                                    createVNode(_component_ElButton, { type: "primary" }, {
                                      default: withCtx(() => [
                                        banner[unref(i18n).locale.value].limitTime ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                          createTextVNode(toDisplayString(_ctx.$t("buyblindboxTimeOver")) + " ", 1),
                                          createVNode(unref(index$1), {
                                            class: "countdown",
                                            time: banner[unref(i18n).locale.value].limitTime - new Date().getTime(),
                                            transform: transformSlotProps,
                                            onEnd: () => banner[unref(i18n).locale.value].limitTime = 0
                                          }, {
                                            default: withCtx(({ days, hours, minutes, seconds }) => [
                                              _hoisted_13,
                                              createBaseVNode("span", null, toDisplayString(parseInt(hours) + parseInt(days) * 24) + ":" + toDisplayString(minutes) + ":" + toDisplayString(seconds), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["time", "onEnd"])
                                        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                          createTextVNode(toDisplayString(_ctx.$t("buyBox")), 1)
                                        ], 2112))
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ])) : createCommentVNode("v-if", true),
                                banner[unref(i18n).locale.value].title === metabotAvatarWhiteList.value ? (openBlock(), createElementBlock("a", {
                                  key: 1,
                                  onClick: withModifiers(toCompose, ["stop"])
                                }, [
                                  createBaseVNode("div", null, [
                                    createVNode(_component_ElButton, {
                                      type: "primary",
                                      class: "collcetionBtn"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.$t("toCompose")), 1)
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ], 8, _hoisted_14)) : createCommentVNode("v-if", true)
                              ]),
                              createBaseVNode("div", _hoisted_15, [
                                createBaseVNode("a", {
                                  onClick: ($event) => toPage(banner[unref(i18n).locale.value].url)
                                }, [
                                  createBaseVNode("div", _hoisted_17, [
                                    createBaseVNode("img", {
                                      src: banner[unref(i18n).locale.value].picUrl
                                    }, null, 8, _hoisted_18)
                                  ])
                                ], 8, _hoisted_16),
                                createBaseVNode("div", _hoisted_19, [
                                  createBaseVNode("div", _hoisted_20, [
                                    createVNode(_component_UserAvatar, {
                                      metaId: banner[unref(i18n).locale.value].issuerMetaId,
                                      type: banner[unref(i18n).locale.value].issuerAvatarType
                                    }, null, 8, ["metaId", "type"])
                                  ]),
                                  createBaseVNode("div", _hoisted_21, [
                                    createBaseVNode("div", _hoisted_22, toDisplayString(banner[unref(i18n).locale.value].issuerName), 1),
                                    createBaseVNode("div", _hoisted_23, " MetaID:" + toDisplayString(banner[unref(i18n).locale.value].issuerMetaId.slice(0, 6)), 1)
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modules"])
            ]),
            createCommentVNode(" \u70ED\u95E8\u4E13\u8F91 \u{1F525} "),
            createBaseVNode("div", _hoisted_24, [
              createBaseVNode("div", _hoisted_25, [
                createBaseVNode("div", _hoisted_26, toDisplayString(_ctx.$t("hotTopic")), 1),
                createBaseVNode("div", _hoisted_27, [
                  createBaseVNode("div", _hoisted_28, [
                    createVNode(unref(Swiper), {
                      modules: [unref(Navigation), unref(Pagination)],
                      pagination: { clickable: true },
                      navigation: {
                        prevEl: ".swiper-button-left-hot",
                        nextEl: ".swiper-button-right-hot"
                      },
                      slidesPerView: unref(hotTopicSlidesPerView),
                      spaceBetween: 10,
                      loop: true,
                      class: "hot-topic-list"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(hotTopics), (item, index) => {
                          return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                            default: withCtx(() => [
                              createBaseVNode("div", {
                                onClick: ($event) => toPage(item[unref(i18n).locale.value].url),
                                to: item[unref(i18n).locale.value].url,
                                class: "hot-topic-item"
                              }, [
                                createBaseVNode("div", _hoisted_30, [
                                  createBaseVNode("img", {
                                    src: item[unref(i18n).locale.value].albumPicUrl,
                                    alt: item[unref(i18n).locale.value].albumTitle
                                  }, null, 8, _hoisted_31)
                                ]),
                                createBaseVNode("div", _hoisted_32, [
                                  createBaseVNode("div", _hoisted_33, [
                                    createVNode(_component_UserAvatar, {
                                      class: normalizeClass({
                                        border: item[unref(i18n).locale.value].issuerAvatarType !== "nft-metabot"
                                      }),
                                      metaId: item[unref(i18n).locale.value].issuerMetaId,
                                      type: item[unref(i18n).locale.value].issuerAvatarType,
                                      onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                                      }, ["stop"]))
                                    }, null, 8, ["class", "metaId", "type"]),
                                    createBaseVNode("div", {
                                      class: "name flex flex-align-center flex-pack-center",
                                      onClick: withModifiers(($event) => _ctx.$filters.toUser(item[unref(i18n).locale.value].issuerMetaId), ["stop"])
                                    }, [
                                      createBaseVNode("span", _hoisted_35, toDisplayString(item[unref(i18n).locale.value].issuerName), 1),
                                      createBaseVNode("img", { src: unref(CertIcon) }, null, 8, _hoisted_36)
                                    ], 8, _hoisted_34),
                                    createBaseVNode("div", {
                                      class: "metaId",
                                      onClick: withModifiers(($event) => _ctx.$filters.toUser(item[unref(i18n).locale.value].issuerMetaId), ["stop"])
                                    }, " MetaID:" + toDisplayString(item[unref(i18n).locale.value].issuerMetaId.slice(0, 6)), 9, _hoisted_37)
                                  ]),
                                  createBaseVNode("div", _hoisted_38, [
                                    createBaseVNode("div", _hoisted_39, toDisplayString(item[unref(i18n).locale.value].albumTitle), 1),
                                    createBaseVNode("div", _hoisted_40, toDisplayString(item[unref(i18n).locale.value].albumContent), 1),
                                    createCommentVNode("                      <div class='flex flex-pack-center'>"),
                                    createCommentVNode("                        <router-link :to='item[i18n.locale.value].url'"),
                                    createCommentVNode("                        >"),
                                    createCommentVNode("                          <ElButton type='primary' size='large'>{{"),
                                    createCommentVNode("                              $t('look')"),
                                    createCommentVNode("                            }}"),
                                    createCommentVNode("                          </ElButton>"),
                                    createCommentVNode("                        </router-link"),
                                    createCommentVNode("                        >"),
                                    createCommentVNode("                      </div>")
                                  ])
                                ])
                              ], 8, _hoisted_29)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modules", "navigation", "slidesPerView"]),
                    createBaseVNode("a", _hoisted_41, [
                      createBaseVNode("img", { src: unref(RightIcon) }, null, 8, _hoisted_42)
                    ]),
                    createBaseVNode("a", _hoisted_43, [
                      createBaseVNode("img", { src: unref(RightIcon) }, null, 8, _hoisted_44)
                    ])
                  ])
                ])
              ])
            ]),
            createCommentVNode(" \u6700\u65B0\u4E13\u8F91 "),
            createBaseVNode("div", _hoisted_45, [
              createBaseVNode("div", _hoisted_46, [
                createBaseVNode("div", _hoisted_47, toDisplayString(_ctx.$t("newTopic")), 1),
                createBaseVNode("div", _hoisted_48, [
                  createBaseVNode("div", _hoisted_49, [
                    createVNode(unref(Swiper), {
                      modules: [unref(Navigation), unref(Pagination)],
                      pagination: { clickable: true },
                      navigation: {
                        prevEl: ".swiper-button-left-new",
                        nextEl: ".swiper-button-right-new"
                      },
                      slidesPerView: unref(newTopicSlidesPerView),
                      spaceBetween: 12,
                      loop: true,
                      class: "new-topic-list"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tempNewTopicList), (item, index) => {
                          return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                            default: withCtx(() => [
                              createBaseVNode("div", {
                                class: "new-topic-item",
                                onClick: ($event) => toPage(item[unref(i18n).locale.value].url)
                              }, [
                                createBaseVNode("div", _hoisted_51, [
                                  createBaseVNode("div", _hoisted_52, [
                                    createVNode(_component_UserAvatar, {
                                      metaId: item[unref(i18n).locale.value].issuerMetaId,
                                      type: item[unref(i18n).locale.value].issuerAvatarType,
                                      onClick: _cache[2] || (_cache[2] = withModifiers(() => {
                                      }, ["stop"]))
                                    }, null, 8, ["metaId", "type"]),
                                    createBaseVNode("div", _hoisted_53, [
                                      createBaseVNode("div", {
                                        class: "name flex flex-align-center",
                                        onClick: withModifiers(($event) => _ctx.$filters.toUser(item[unref(i18n).locale.value].issuerMetaId), ["stop"])
                                      }, [
                                        createBaseVNode("span", _hoisted_55, toDisplayString(item[unref(i18n).locale.value].issuerName), 1),
                                        createBaseVNode("img", { src: unref(CertIcon) }, null, 8, _hoisted_56)
                                      ], 8, _hoisted_54),
                                      createBaseVNode("div", {
                                        class: "metaId",
                                        onClick: withModifiers(($event) => _ctx.$filters.toUser(item[unref(i18n).locale.value].issuerMetaId), ["stop"])
                                      }, " MetaID: " + toDisplayString(item[unref(i18n).locale.value].issuerMetaId.slice(0, 6)), 9, _hoisted_57)
                                    ])
                                  ])
                                ]),
                                createBaseVNode("div", _hoisted_58, [
                                  createBaseVNode("div", _hoisted_59, [
                                    createBaseVNode("div", _hoisted_60, [
                                      createBaseVNode("div", _hoisted_61, toDisplayString(item[unref(i18n).locale.value].totalSupply), 1),
                                      createBaseVNode("div", _hoisted_62, toDisplayString(_ctx.$t("issueNumber")), 1)
                                    ]),
                                    createBaseVNode("div", _hoisted_63, [
                                      createBaseVNode("div", _hoisted_64, toDisplayString(item[unref(i18n).locale.value].ownerTotal), 1),
                                      createBaseVNode("div", _hoisted_65, toDisplayString(_ctx.$t("haveder")), 1)
                                    ])
                                  ]),
                                  createBaseVNode("div", _hoisted_66, [
                                    createBaseVNode("div", _hoisted_67, [
                                      createBaseVNode("div", _hoisted_68, [
                                        item[unref(i18n).locale.value].issuePrice ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                          unref(store).getters.getterCurrentPrice === unref(unitName).RMB ? (openBlock(), createElementBlock("span", _hoisted_69, "\xA5\xA0")) : createCommentVNode("v-if", true),
                                          createTextVNode(" " + toDisplayString(item[unref(i18n).locale.value].issueCurrentPrice) + " ", 1),
                                          unref(store).getters.getterCurrentPrice === unref(unitName).BSV ? (openBlock(), createElementBlock("img", {
                                            key: 1,
                                            src: unref(BsvIcon)
                                          }, null, 8, _hoisted_70)) : createCommentVNode("v-if", true)
                                        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                          _hoisted_71
                                        ], 2112))
                                      ]),
                                      createBaseVNode("div", _hoisted_72, toDisplayString(_ctx.$t("startPrice")), 1)
                                    ]),
                                    createBaseVNode("div", _hoisted_73, [
                                      createBaseVNode("div", _hoisted_74, [
                                        item[unref(i18n).locale.value].floorPrice ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                          unref(store).getters.getterCurrentPrice === unref(unitName).RMB ? (openBlock(), createElementBlock("span", _hoisted_75, "\xA5\xA0")) : createCommentVNode("v-if", true),
                                          createTextVNode(" " + toDisplayString(item[unref(i18n).locale.value].floorCurrentPrice) + " ", 1),
                                          unref(store).getters.getterCurrentPrice === unref(unitName).BSV ? (openBlock(), createElementBlock("img", {
                                            key: 1,
                                            src: unref(BsvIcon)
                                          }, null, 8, _hoisted_76)) : createCommentVNode("v-if", true)
                                        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                          _hoisted_77
                                        ], 2112))
                                      ]),
                                      createBaseVNode("div", _hoisted_78, toDisplayString(_ctx.$t("floorPrice")), 1)
                                    ])
                                  ])
                                ]),
                                createBaseVNode("div", _hoisted_79, [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(item[unref(i18n).locale.value].nftList, (nft) => {
                                    return openBlock(), createElementBlock("div", {
                                      class: "item",
                                      onClick: withModifiers(($event) => toDetail(nft.genesis, nft.codehash, nft.tokenIndex), ["stop"])
                                    }, [
                                      createBaseVNode("div", {
                                        to: {
                                          name: "detail",
                                          params: {
                                            genesisId: nft.genesis,
                                            codehash: nft.codehash,
                                            tokenIndex: nft.tokenIndex
                                          }
                                        },
                                        class: "item-warp"
                                      }, [
                                        createBaseVNode("img", {
                                          src: _ctx.$filters.metafile(nft.icon, 200),
                                          alt: nft.name,
                                          title: nft.name
                                        }, null, 8, _hoisted_82)
                                      ], 8, _hoisted_81)
                                    ], 8, _hoisted_80);
                                  }), 256))
                                ])
                              ], 8, _hoisted_50)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modules", "navigation", "slidesPerView"]),
                    createBaseVNode("a", _hoisted_83, [
                      createBaseVNode("img", { src: unref(RightIcon) }, null, 8, _hoisted_84)
                    ]),
                    createBaseVNode("a", _hoisted_85, [
                      createBaseVNode("img", { src: unref(RightIcon) }, null, 8, _hoisted_86)
                    ])
                  ])
                ])
              ])
            ]),
            createCommentVNode(" \u6700\u53D7\u6B22\u8FCE "),
            createBaseVNode("div", _hoisted_87, [
              createBaseVNode("div", _hoisted_88, [
                createBaseVNode("div", _hoisted_89, toDisplayString(_ctx.$t("moreLike")), 1),
                createBaseVNode("div", _hoisted_90, [
                  createBaseVNode("div", _hoisted_91, [
                    createVNode(unref(Swiper), {
                      modules: [unref(Navigation), unref(Pagination)],
                      pagination: { clickable: true },
                      navigation: {
                        prevEl: ".swiper-button-left-like",
                        nextEl: ".swiper-button-right-like"
                      },
                      slidesPerView: unref(hotTopicSlidesPerView),
                      spaceBetween: 12,
                      loop: true,
                      class: "like-topic-list"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(hotNFTs), (item, index) => {
                          return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                            default: withCtx(() => [
                              createBaseVNode("a", {
                                class: "like-topic-item",
                                onClick: ($event) => toDetail(item.genesis, item.codehash, item.tokenIndex)
                              }, [
                                createBaseVNode("div", _hoisted_93, [
                                  createBaseVNode("img", {
                                    src: _ctx.$filters.metafile(item.icon, 400)
                                  }, null, 8, _hoisted_94)
                                ]),
                                createBaseVNode("div", _hoisted_95, [
                                  createBaseVNode("div", _hoisted_96, [
                                    createBaseVNode("div", _hoisted_97, toDisplayString(item.name), 1)
                                  ])
                                ]),
                                createBaseVNode("div", _hoisted_98, [
                                  createBaseVNode("div", _hoisted_99, [
                                    createVNode(_component_UserAvatar, {
                                      onClick: _cache[3] || (_cache[3] = withModifiers(() => {
                                      }, ["stop"])),
                                      metaId: item.issuerMetaId,
                                      type: item.issuerAvatarType
                                    }, null, 8, ["metaId", "type"]),
                                    createBaseVNode("div", _hoisted_100, [
                                      createBaseVNode("div", {
                                        class: "name flex flex-align-center",
                                        onClick: withModifiers(($event) => _ctx.$filters.toUser(item.issuerMetaId), ["stop"])
                                      }, [
                                        createBaseVNode("span", _hoisted_102, toDisplayString(item.issuerName), 1),
                                        createBaseVNode("img", { src: unref(CertIcon) }, null, 8, _hoisted_103)
                                      ], 8, _hoisted_101),
                                      createBaseVNode("div", {
                                        class: "metaId",
                                        onClick: withModifiers(($event) => _ctx.$filters.toUser(item.issuerMetaId), ["stop"])
                                      }, " MetaID: " + toDisplayString(item.issuerMetaId.slice(0, 6)), 9, _hoisted_104)
                                    ])
                                  ])
                                ])
                              ], 8, _hoisted_92)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modules", "navigation", "slidesPerView"]),
                    createBaseVNode("a", _hoisted_105, [
                      createBaseVNode("img", { src: unref(RightIcon) }, null, 8, _hoisted_106)
                    ]),
                    createBaseVNode("a", _hoisted_107, [
                      createBaseVNode("img", { src: unref(RightIcon) }, null, 8, _hoisted_108)
                    ])
                  ])
                ])
              ])
            ]),
            createCommentVNode(" \u524D\u6240\u672A\u6709\u7684\u529F\u80FD\u6027NFT\u4F53\u9A8C "),
            createBaseVNode("div", _hoisted_109, [
              createBaseVNode("div", _hoisted_110, [
                createBaseVNode("div", _hoisted_111, toDisplayString(_ctx.$t("nftModuleTitle")), 1),
                createBaseVNode("div", _hoisted_112, [
                  createBaseVNode("div", _hoisted_113, [
                    createBaseVNode("div", _hoisted_114, [
                      createBaseVNode("div", _hoisted_115, [
                        createBaseVNode("div", _hoisted_116, [
                          _hoisted_117,
                          createBaseVNode("div", _hoisted_118, [
                            _hoisted_119,
                            createBaseVNode("div", _hoisted_120, toDisplayString(_ctx.$t("nftModuleDrsc1")), 1)
                          ])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_121, [
                        createBaseVNode("div", _hoisted_122, [
                          _hoisted_123,
                          createBaseVNode("div", _hoisted_124, [
                            createBaseVNode("div", _hoisted_125, toDisplayString(_ctx.$t("nftModuleName2")), 1),
                            createBaseVNode("div", _hoisted_126, toDisplayString(_ctx.$t("nftModuleDrsc2")), 1)
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_127, [
                      createBaseVNode("div", _hoisted_128, [
                        createBaseVNode("div", _hoisted_129, [
                          _hoisted_130,
                          createBaseVNode("div", _hoisted_131, [
                            createBaseVNode("div", _hoisted_132, toDisplayString(_ctx.$t("nftModuleName3")), 1),
                            createBaseVNode("div", _hoisted_133, toDisplayString(_ctx.$t("nftModuleDrsc3")), 1)
                          ])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_134, [
                        createBaseVNode("div", _hoisted_135, [
                          _hoisted_136,
                          createBaseVNode("div", _hoisted_137, [
                            createBaseVNode("div", _hoisted_138, toDisplayString(_ctx.$t("nftModuleName4")), 1),
                            createBaseVNode("div", _hoisted_139, toDisplayString(_ctx.$t("nftModuleDrsc4")), 1)
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["loading"]);
    };
  }
});
var Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-23543608"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/Index.vue"]]);

export { Index as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXguZWYxZWVkNDguanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
